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
        $exist_table = $connection->hasTable('products_attribute');

        if (!$exist_table)
            Schema::create('products_attribute', function (Blueprint $table) {
                $table->increments('id');
                $table->bigInteger('product_id');
                $table->bigInteger('attribute_id');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('products_attribute');

        return false;
    }
};
