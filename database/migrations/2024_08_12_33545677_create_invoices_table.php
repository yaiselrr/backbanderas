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
        $exist_table = $connection->hasTable('invoices');

        if (!$exist_table)
            Schema::create('invoices', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement();
                $table->string('code')->unique('code');
                $table->integer('year');
                $table->string('phone')->nullable();
                $table->string('address')->nullable();
                $table->double('subtotal');
                $table->double('total');
                $table->string('pay_way');
                $table->text('observations')->nullable();
                $table->dateTime('invoice_date');
                $table->bigInteger('order_id');
                $table->string('prefix');
                $table->double('discount');
                $table->dateTime('cancelled_at')->nullable();
                $table->bigInteger('cancelled_by')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('invoices');

        return false;
    }
};
