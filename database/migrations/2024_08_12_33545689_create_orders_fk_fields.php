<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Orders table */
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

        if ($exist_table) {
            if (!Schema::hasIndex('orders', 'orders_client_id_foreign'))
                Schema::table('orders', function (Blueprint $table) {
                    $table->foreign('client_id')->references('id')->on('client')->onDelete('cascade');
                });
            if (!Schema::hasIndex('orders', 'orders_coupon_id_foreign'))
                Schema::table('orders', function (Blueprint $table) {
                    $table->foreign('coupon_id')->references('id')->on('coupons')->onDelete('cascade');
                });
            if (!Schema::hasIndex('orders', 'orders_pay_way_id_foreign'))
                Schema::table('orders', function (Blueprint $table) {
                    $table->foreign('pay_way_id')->references('id')->on('pay_ways')->onDelete('cascade');
                });
            if (!Schema::hasIndex('orders', 'orders_request_status_id_foreign'))
                Schema::table('orders', function (Blueprint $table) {
                    $table->foreign('request_status_id')->references('id')->on('request_statuses')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('orders');

        return false;
    }
};
