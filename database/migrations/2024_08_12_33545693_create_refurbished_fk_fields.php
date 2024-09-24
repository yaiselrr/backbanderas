<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Refurbished table */
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
        $exist_table = $connection->hasTable('refurbished');

        if ($exist_table) {
            if (!Schema::hasIndex('refurbished', 'refurbished_format_product_order_id_foreign'))
                Schema::table('refurbished', function (Blueprint $table) {
                    $table->foreign('format_product_order_id')->references('id')->on('product_order')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('refurbished');

        return false;
    }
};
