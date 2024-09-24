<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Products_attribute table */
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

        if ($exist_table) {
            if (!Schema::hasIndex('products_attribute', 'products_attribute_attribute_id_foreign'))
                Schema::table('products_attribute', function (Blueprint $table) {
                    $table->foreign('attribute_id')->references('id')->on('attributes')->onDelete('cascade');
                });
            if (!Schema::hasIndex('products_attribute', 'products_attribute_product_id_foreign'))
                Schema::table('products_attribute', function (Blueprint $table) {
                    $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('products_attribute');

        return false;
    }
};
