<?php


namespace App\Services\Robots\Blocks;


use App\Mails\RobotsMail;
use App\User;
use Illuminate\Support\Facades\Mail;

class Block
{
    /**
     * @var string Тип узла
     */
    protected $type;

    /**
     * @var array Связи узла
     */
    protected $edges;

    /**
     * @var array Список всех узлов
     */
    protected $nodes;

    /**
     * @var object Следующий узел
     */
    protected static $nextNode;

    /**
     * Block constructor.
     * @param string $type
     * @param $edges
     * @param $nodes
     */
    public function __construct(string $type, $edges, $nodes)
    {
        $this->type = $type;
        $this->edges = $edges;
        $this->nodes = $nodes;
    }

    /**
     * Запустить узел и выполнить действие
     */
    public function run()
    {
        $currentNode = collect($this->nodes)->where('data.props.type', $this->type)->first();
        $currentNode = self::$nextNode ?: $currentNode;
        $currentNodeEdgesSources = collect($this->edges)->where('source', $currentNode->id)->values()->all();
        $currentNodeEdgesSource = $this->getCurrentNodeEdgesSource($currentNode, $currentNodeEdgesSources);
        if ($currentNode->data->props->type == 'action') {
            $this->doAction($currentNode);
        }
        self::$nextNode = collect($this->nodes)->where('id', $currentNodeEdgesSource->target)->first();
    }

    /**
     * Получить связь, которая будет выполняться следующей
     * @param $node
     * @param $nodeEdges
     * @return mixed
     */
    protected function getCurrentNodeEdgesSource($node, $nodeEdges)
    {
        $nodeEdges = collect($nodeEdges);
        $source = null;
        if ($node->data->props->type == 'condition') {
            $source = $this->runCondition($node)
                ? $nodeEdges->where('sourceHandle', 'yes')->first()
                : $nodeEdges->where('sourceHandle', 'no')->first();
        } else {
            $source = $nodeEdges->first();
        }
        return $source;
    }

    /**
     * Запуститьобработку и выполнение условия
     * @param $node
     * @return mixed
     */
    protected function runCondition($node)
    {
        $conditionBody = collect($node->data->props->nodeData);
        $linkLogicOperator = null;
        $str = '';
        $i = 1;

        foreach ($conditionBody as $item) {
            $arr = [];
            foreach ($item->body as $operands) {
                if (is_object($operands)) {
                    $operandsCollection = collect($operands);
                    $operator = $operandsCollection->keys()->first();
                    $operands = $operandsCollection->values()->first();
                    $arr[] = ' (' . $operands[0] . ' ' . $operator . ' ' . $operands[1] . ') ';
                } else {
                    if (collect($conditionBody)->count() != $i)
                        $linkLogicOperator = $operands;
                }
            }
            $str .= ' (' . implode($item->operator, $arr) . ') ' . $linkLogicOperator;
            $i++;
        }
        $str = trim($str, $linkLogicOperator);
        dump($str);
        $str = 'if(' .$str .') { return true; } else { return false; }';
        return eval($str);
    }

    /**
     * Выполнить действие
     * @param $node
     */
    protected function doAction($node)
    {
        $action = new Action($node);
        $action->runAction();
    }

    public function getCurrentNode()
    {
        return self::$nextNode->data->props->type;
    }

    /**
     * Получить следующий блок
     * @return Block
     */
    public function next()
    {
        return new self(self::$nextNode->data->props->type, $this->edges, $this->nodes);
    }

    /**
     * Проверить, является ли блок конечным
     * @return bool
     */
    public function isEnd()
    {
        return self::$nextNode->data->props->type == 'end';
    }
}
