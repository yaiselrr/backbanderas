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
        $exist_table = $connection->hasTable('product_order');

        if (!$exist_table)
            Schema::create('product_order', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement();
                $table->double('quantity');
                $table->bigInteger('order_id');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
                $table->bigInteger('product_id');
            });
    }

    public function down()
    {
        Schema::dropIfExists('product_order');

        return false;
    }
};
