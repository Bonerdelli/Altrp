<?php

namespace App\Altrp\Generators;

use App\Altrp\Controller;
use App\Altrp\Source;
use Illuminate\Support\Str;

class RouteGenerator
{
    /**
     * Путь к файлу маршрутов
     *
     * @var string
     */
    private $path;

    /** @var string */
    private $routeContents;

    /**
     * Содежимое stub файла
     *
     * @var string
     */
    private $routeStubContents;

    /** @var string */
    private $routeStub;

    /**
     * Динамические переменные для stub файла
     *
     * @var array
     */
    private $dynamicVariables = [];

    private $controllerModel;


    /**
     * RouteGenerator constructor.
     * @param Controller $controller
     */
    public function __construct(Controller $controller)
    {
        $this->controllerModel = $controller;

        $this->path = base_path('routes/AltrpRoutes.php');

        $this->routeContents = file($this->path, 2);

        $this->routeStubContents = $this->getStubContents();
    }

    /**
     * Сгенерировать новые маршруты
     *
     * @param $oldModelName
     * @param $modelName
     * @param $controller
     * @return boolean
     */
    public function generate($oldModelName, $modelName, $controller)
    {
        $routes = $this->getRoutesFromSources($modelName, $controller);
        $this->routeStub = array_merge($this->fillStub(), $routes);

        if ($items = $this->routeExists($oldModelName, $controller)) {
            $this->routeRewrite($items);
        } else {
            $this->routeWrite();
        }
        $result = file_put_contents($this->path, implode(PHP_EOL, $this->routeContents));

        return $result;
    }

    /**
     * Сформировать и получить маршруты из источников данных
     *
     * @param $tableName
     * @param $controller
     * @return array
     */
    protected function getRoutesFromSources($tableName, $controller)
    {
        $routes = [];
        $actions = ['get', 'options', 'show', 'add', 'update', 'delete', 'get_column'];
        $sources = Source::where([
            ['controller_id', $this->controllerModel->id],
            ['model_id', $this->controllerModel->model->id],
        ])->get();
        if (! $sources) return [];
        foreach ($sources as $source) {
            if (! in_array($source->type, $actions)) {
                $routes[] = 'Route::get(\'/queries/' . $tableName .'/'
                . $source->type . '\', [\'uses\' =>\'' . $controller . '@'
                . lcfirst(Str::studly($source->type)) . '\']);';
            }
        }
        return $routes;
    }

    /**
     * Проверить, существует ли уже такой маршрут в файле
     * и получить индекс строки, если совпадение найдено
     *
     * @param $tableName
     * @param $controller
     * @return array|bool
     */
    protected function routeExists($tableName, $controller)
    {
        $indexes = [];
        for ($i = 0; $i < count($this->routeContents); $i++) {
            if (Str::contains($this->routeContents[$i], ' '.$tableName . ' resource')
                || Str::contains($this->routeContents[$i], '/'.$tableName)
                || Str::contains($this->routeContents[$i], '/queries/'.$tableName)
                || Str::contains($this->routeContents[$i], '/'.Str::singular($tableName).'_options')
                || Str::contains($this->routeContents[$i], $controller)) {
                $indexes[] = $i;
            }
        }
        if ($indexes) return $indexes;
        return false;
    }

    /**
     * Перезаписать существующий маршрут
     *
     * @param $itemIndexes
     */
    protected function routeRewrite($itemIndexes)
    {
        $newIndexes = 0;
        $countRouteStub = count($this->routeStub);
        for ($i = 0; $i < count($itemIndexes); $i++) {

            if ($i < $countRouteStub)
                $this->routeContents[$itemIndexes[$i]] = $this->routeStub[$i];
            else
                unset($this->routeContents[$itemIndexes[$i]]);

            $newIndexes = $itemIndexes[$i];
            unset($this->routeStub[$i]);
        }
        if ($this->routeStub && $newIndexes) {
            $newIndexes++;
            $arr = array_values($this->routeStub);
            for ($i = 0; $i < count($arr); $i++) {
                array_splice($this->routeContents, $newIndexes,0, $arr[$i]);
            }
        }
    }

    /**
     * Записать новый маршрут в файл
     */
    protected function routeWrite()
    {
        for ($i = 0; $i < count($this->routeStub); $i++) {
            $this->routeContents[] = $this->routeStub[$i];
        }
    }

    /**
     * Удалить маршруты из пользовательского файла маршрутов
     *
     * @param Controller $controller
     * @return false|int
     */
    public function deleteRoutes($controller)
    {
        $contents = $this->routeContents;
        if (! $contents) return true;
        foreach ($contents as $line => $content) {
            if (Str::contains($content, ' '.$controller->model->table->name . ' resource')
                || Str::contains($content, '/'.$controller->model->table->name)
                || Str::contains($content, '\\'.$controller->model->name.'Controller')) {
                unset($contents[$line]);
            }
        }
        return file_put_contents($this->path, implode(PHP_EOL, $contents));
    }

    /**
     * Добавить динамическю переменую
     *
     * @param string $name
     * @param mixed $val
     *
     * @return void
     */
    public function addDynamicVariable($name, $val)
    {
        $name = '{{' . $name . '}}';
        $this->dynamicVariables[$name] = $val;
    }

    /**
     * Заполнить stub файл динамическими переменными
     *
     * @return array
     */
    public function fillStub()
    {
        foreach ($this->dynamicVariables as $name => $val) {
            $this->routeStubContents = str_replace($name, $val, $this->routeStubContents);
        }

        return $this->routeStubContents;
    }

    /**
     * Получить содержимое stub файла
     *
     * @return string
     */
    protected function getStubContents()
    {
        $stub = config('crudgenerator.custom_template')
            ? config('crudgenerator.path') . 'routes/create_route.stub'
            : __DIR__ . '/../stubs/routes/create_route.stub';

        return file($stub, 2);
    }
}
