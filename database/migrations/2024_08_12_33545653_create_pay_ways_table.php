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
        $exist_table = $connection->hasTable('pay_ways');

        if (!$exist_table)
            Schema::create('pay_ways', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement();
                $table->string('name')->unique('name');
                $table->text('instructions')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('pay_ways');

        return false;
    }
};
