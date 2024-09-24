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
        $exist_table = $connection->hasTable('orders');

        if (!$exist_table)
            Schema::create('orders', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement();
                $table->string('code')->unique('code');
                $table->string('phone')->nullable();
                $table->string('address')->nullable();
                $table->double('price');
                $table->text('observations')->nullable();
                $table->bigInteger('request_status_id');
                $table->bigInteger('pay_way_id')->nullable();
                $table->date('delivery_date')->nullable();
                $table->dateTime('requested_date');
                $table->dateTime('cancelled_at')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
                $table->unsignedInteger('client_id');
                $table->unsignedInteger('coupon_id');
            });
    }

    public function down()
    {
        Schema::dropIfExists('orders');

        return false;
    }
};
