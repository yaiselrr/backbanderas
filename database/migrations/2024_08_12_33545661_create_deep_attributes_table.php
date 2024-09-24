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
        $exist_table = $connection->hasTable('deep_attributes');

        if (!$exist_table)
            Schema::create('deep_attributes', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name')->unique('name');
                $table->integer('father_id')->nullable();
                $table->text('data');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('deep_attributes');

        return false;
    }
};
