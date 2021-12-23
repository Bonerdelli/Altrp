<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    //
  protected $fillable = [
    'name',
    'settings',
    'title',
    'guid',
  ];

  const NOT_CONTENT_AREAS = [
    'card',
    'popup',
    'reports',
    'mails',
  ];

  protected $casts = [
    'settings' => 'array',
  ];

  static function get_areas_names(){
    return static::all()->map( function ( $area ) {
      return $area->name;
    } )->toArray();
  }

  static function get_areas_options(){
    return static::all()->map( function ( $area ) {
      return [$area->id => $area->name];
    } )->toArray();
  }

  public function categoryOptions()
  {
      return CategoryObject::select('altrp_categories.guid as value', 'altrp_categories.name as label')->leftJoin('altrp_categories', 'altrp_categories.guid', '=', 'altrp_category_objects.category_guid')
          ->where('altrp_category_objects.object_guid', $this->guid)->get();
  }
  
}
