<?php

namespace App\Observers;

use App\Altrp\Column;
use App\Altrp\Model;
use App\Altrp\Migration;
use App\Altrp\Generators\ColumnMigrationGenerator;
use App\Altrp\Generators\NewMigrationGenerator;

use App\Exceptions\AltrpMigrationRunExceptions;

class AltrpColumnObserver
{
    /**
     * Вызываем после создания колонки
     * @param Column $column
     */
    public function creating(Column $column)
    {
        $model = Model::find($column->model_id);
        
        $generator = new ColumnMigrationGenerator($column);
        $file = $generator->createColumnGenerate();
        $name = $generator->getMigrationName();
        
        if(!$file) {
            throw new AltrpMigrationCreateFileExceptions("Failed to create migration file");
        }
        
        $migration = new Migration();
        $migration->name = $name;
        $migration->file_path = $file;
        $migration->user_id = auth()->user()->id;
        $migration->table_id = $column->altrp_model->altrp_table->id;
        $migration->status = "1";
        $migration->data = "";
        $migration->save();
        
        $column->altrp_migration_id = $migration->id;
        
    }
    
    /**
     * Вызываем после обновления колонки
     * @param Column $column
     */
    public function updating(Column $column)
    {
        $model = Model::find($column->model_id);
        $old_column = Column::find($column->id);
        
        $generator = new ColumnMigrationGenerator($column);
        $file = $generator->updateColumnGenerate($old_column);
        $name = $generator->getMigrationName();
       
        if(!$file) {
            throw new AltrpMigrationCreateFileExceptions("Failed to create migration file");
        }
        
        $migration = new Migration();
        $migration->name = $name;
        $migration->file_path = $file;
        $migration->user_id = auth()->user()->id;
        $migration->table_id = $column->altrp_model->altrp_table->id;
        $migration->status = "1";
        $migration->data = "";
        $migration->save();
        
        $column->altrp_migration_id = $migration->id;
        
    }
    
    /**
     * Вызываем после удаления колонки
     * @param Column $column
     */
    public function deleting(Column $column)
    {
        $model = Model::find($column->model_id);
        
        $generator = new ColumnMigrationGenerator($column);
        $file = $generator->deleteColumnGenerate();
        $name = $generator->getMigrationName();
       
        if(!$file) {
            throw new AltrpMigrationCreateFileExceptions("Failed to create migration file");
        }
        dd(1);
        $migration = new Migration();
        $migration->name = $name;
        $migration->file_path = $file;
        $migration->user_id = auth()->user()->id;
        $migration->table_id = $column->altrp_model->altrp_table->id;
        $migration->status = "1";
        $migration->data = "";
        $migration->save();
        
        $column->altrp_migration_id = $migration->id;
        
    }
}
