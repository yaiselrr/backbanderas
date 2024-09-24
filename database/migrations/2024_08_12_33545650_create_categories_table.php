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
        $exist_table = $connection->hasTable('categories');

        if (!$exist_table)
            Schema::create('categories', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement();
                $table->bigInteger('category_id')->nullable();
                $table->text('description');
                $table->string('name');
                $table->string('slug')->nullable()->unique('slug');
                $table->timestamp('deleted_at')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
                $table->text('image')->nullable();
                $table->boolean('featured')->default(false);
            });
    }

    public function down()
    {
        Schema::dropIfExists('categories');

        return false;
    }
};
