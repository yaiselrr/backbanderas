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
        $exist_table = $connection->hasTable('coupons');

        if (!$exist_table)
            Schema::create('coupons', function (Blueprint $table) {
                $table->increments('id');
                $table->string('code');
                $table->string('type');
                $table->decimal('coupon_value');
                $table->integer('available_quantity');
                $table->dateTime('start_date')->nullable();
                $table->dateTime('end_date')->nullable();
                $table->text('conditions');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('coupons');

        return false;
    }
};
