<?php

namespace App\Altrp\Generators\Migration;

use App\Exceptions\AltrpMigrationIncorrectFieldTypeException;
use App\Altrp\Generators\Migration\MigrationFieldInterface;

use App\Altrp\Key;
/**
 * Description of Field
 *
 */
class MigrationKey{
    
    public $key;
    
    public $old_key;
    
    protected $tabIndent = '    ';
    
    protected $type;
    
    protected $text;
    
    public $available_modifier_values = [
        "restrict","cascade","set null","no action", 
    ];
    
    /**
     * 
     * @param Key $key
     * @param Key $old_key
     */
    public function __construct($key, $old_key) {
        $this->key = $key;
        $this->old_key = $old_key;
    }
    
    /**
     * Добавление ключа
     * @return string
     */
    public function up() {
        
        if($this->isDeleteKey()) {
            return $this->delete();
        }
        
        if(!$this->isNewKey()) {
            return $this->update();
        }
        return $this->create();
    }
    
    /**
     * Откат ключа в миграции
     * @return string
     */
    public function down() {
        return "";
    }
    
    /**
     * Создание ключа
     * @return string
     */
    public function create() {
        
        $this->text = $this->setText();
        $this->addTabIndent();
        
        return $this->text;
    }
    
    /**
     * Обновление ключа
     * @return string
     */
    public function update() {
        
        if(!$this->checkAllAttributes()) {
            $this->text = $this->setDeleteText();
            $this->addTabIndent();
            
            $this->text .= $this->setText();
            $this->addTabIndent();
        }
        
        return $this->text;
    }
    
    /**
     * Удаление ключа
     * @return string
     */
    public function delete() {
        $this->text = $this->setDeleteText();
        $this->addTabIndent();
        
        return $this->text;
    }
    
    /**
     * Формируем строку для создания или обновления ключа
     * @return string
     */
    protected function setText() {
        $modifiers = $this->getKeyModifiers();
        $text = "\$table->foreign('".$this->key->source_column."')->references('".$this->key->target_column."')->on('".$this->key->target_table."')".$modifiers;
        return $text;
    }
    
    /**
     * Формируем строку для удаления ключа
     * @return string
     */
    protected function setDeleteText() {
        $text = "\$table->dropForeign(['".$this->old_key->source_column."'])";
        return $text;
    }
    
    /**
     * Добавление табуляций и символа переноса строки
     * @return string
     */
    protected function addTabIndent() {
        $this->text .= ";\n".$this->tabIndent.$this->tabIndent.$this->tabIndent;
        return $this->text;
    }
    
    /**
     * Является ли ключ новым
     * @return boolean
     */
    protected function isNewKey() {
        if(!$this->old_key) return true;
        else return false;
    }
    
    /**
     * Является ли ключ удаленным
     * @return boolean
     */
    protected function isDeleteKey() {
        if($this->old_key && !$this->key) return true;
        else return false;
    }
    
    /**
     * Получаем значение onUpdate
     * @return string
     * @throws AltrpMigrationKeyIncorrectModifierValueException
     */
    protected function getOnUpdate() {
        
        if(!$this->checkModifierValue($this->key->onUpdate)) {
            throw new AltrpMigrationKeyIncorrectModifierValueException("Incorrect onUpdate value", 500);
        }
        
        $onUpdate = "";
        
        if($this->key->onUpdate) {
            $onUpdate = "->onUpdate('".$this->key->onUpdate."')";
        }
        
        return $onUpdate;
    }
    
    /**
     * Получаем значение onDelete
     * @return string
     * @throws AltrpMigrationKeyIncorrectModifierValueException
     */
    protected function getOnDelete() {
        
        if(!$this->checkModifierValue($this->key->onDelete)) {
            throw new AltrpMigrationKeyIncorrectModifierValueException("Incorrect onDelete value", 500);
        }
        
        $onDelete = "";
        
        if($this->key->onDelete) {
            $onDelete = "->onDelete('".$this->key->onDelete."')";
        }
        
        return $onDelete;
    }
    
    /**
     * Получаем все модификаторы ключа
     * @return type
     */
    protected function getKeyModifiers() {
        $text = "";
        $text .= $this->getOnUpdate();
        $text .= $this->getOnDelete();
        return $text;
    }
    
    /**
     * Сравниваем атрибуты у ключей
     *
     * @return boolean
     */
    protected function checkAllAttributes()
    {
        if($this->isNewKey()) return false;
        
        foreach($this->key->getAttributes() as $key => $value) {
            if($value != $this->old_key->{$key}) {
                return false;
            }
        }
        
        return true;
    }
    
    /**
     * Проверяем значения модификаторов
     * @param string $value
     * @return boolean
     */
    protected function checkModifierValue($value) {
        
        if(array_search($value, $this->available_modifier_values) === false) return false;
        
        return true;
    }
}