<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 */
return new class extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $connection = Schema::connection('db');
        $exist_table = $connection->hasTable('migrations');

        if (!$exist_table)
            Schema::create('migrations', function (Blueprint $table) {
                $table->increments('id');
                $table->string('migration');
                $table->integer('batch');
                $table->timestamps();
            });
    }

    public function down()
    {
        Schema::dropIfExists('migrations');

        return false;
    }
};
