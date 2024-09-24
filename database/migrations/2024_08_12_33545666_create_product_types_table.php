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
        $exist_table = $connection->hasTable('product_type');

        if (!$exist_table)
            Schema::create('product_type', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement();
                $table->string('name')->unique('name');
                $table->text('description')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('product_type');

        return false;
    }
};
