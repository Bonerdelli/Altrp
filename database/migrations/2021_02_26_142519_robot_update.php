<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RobotUpdate extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    //
    Schema::table('altrp_robots', function (Blueprint $table) {
      // $table->bigInteger('user_id')->unsigned();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('altrp_robots', function (Blueprint $table) {
      // $table->dropColumn('user_id');
    });
    //
  }
}
