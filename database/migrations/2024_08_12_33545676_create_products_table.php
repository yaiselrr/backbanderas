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
        $exist_table = $connection->hasTable('products');

        if (!$exist_table)
            Schema::create('products', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement();
                $table->string('name');
                $table->string('code')->unique('code');
                $table->text('summary')->nullable();
                $table->text('description')->nullable();
                $table->dateTime('deleted_at')->nullable();
                $table->decimal('price')->nullable();
                $table->decimal('rating')->nullable();
                $table->string('slug_name')->nullable();
                $table->double('stock')->nullable();
                $table->boolean('enabled');
                $table->bigInteger('category_id')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
                $table->bigInteger('product_type_id');
            });
    }

    public function down()
    {
        Schema::dropIfExists('products');

        return false;
    }
};
