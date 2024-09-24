<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Product_order table */
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
        $exist_table = $connection->hasTable('product_order');

        if ($exist_table) {
            if (!Schema::hasIndex('product_order', 'product_order_order_id_foreign'))
                Schema::table('product_order', function (Blueprint $table) {
                    $table->foreign('order_id')->references('id')->on('product_order')->onDelete('cascade');
                });
            if (!Schema::hasIndex('product_order', 'product_order_product_id_foreign'))
                Schema::table('product_order', function (Blueprint $table) {
                    $table->foreign('product_id')->references('id')->on('product_order')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('product_order');

        return false;
    }
};
