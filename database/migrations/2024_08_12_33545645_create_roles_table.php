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
        $exist_table = $connection->hasTable('roles');

        if (!$exist_table)
            Schema::create('roles', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('role_father_id')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
                $table->string('name')->unique('roles_name_unique');
                $table->string('label')->nullable();
                $table->text('description')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('roles');

        return false;
    }
};
