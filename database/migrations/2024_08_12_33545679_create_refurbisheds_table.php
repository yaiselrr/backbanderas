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
        $exist_table = $connection->hasTable('refurbished');

        if (!$exist_table)
            Schema::create('refurbished', function (Blueprint $table) {
                $table->increments('id');
                $table->string('code')->unique('code');
                $table->bigInteger('format_product_order_id');
                $table->integer('amount');
                $table->text('description');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('refurbished');

        return false;
    }
};
