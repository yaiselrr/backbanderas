<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Invoices table */
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
        $exist_table = $connection->hasTable('invoices');

        if ($exist_table) {
            if (!Schema::hasIndex('invoices', 'invoices_order_id_foreign'))
                Schema::table('invoices', function (Blueprint $table) {
                    $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('invoices');

        return false;
    }
};
