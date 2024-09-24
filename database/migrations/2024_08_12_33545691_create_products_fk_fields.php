<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Products table */
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

        if ($exist_table) {
            if (!Schema::hasIndex('products', 'products_category_id_foreign'))
                Schema::table('products', function (Blueprint $table) {
                    $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
                });
            if (!Schema::hasIndex('products', 'products_product_type_id_foreign'))
                Schema::table('products', function (Blueprint $table) {
                    $table->foreign('product_type_id')->references('id')->on('product_type')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('products');

        return false;
    }
};
