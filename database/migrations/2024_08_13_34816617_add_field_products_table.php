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
        $exist_table = $connection->hasTable('products');

        if ($exist_table)
            Schema::table('products', function (Blueprint $table) {
                $table->double('min_price')->nullable();
                $table->double('max_price')->nullable();
                $table->text('image')->nullable();
                $table->text('key_words')->nullable();
                $table->double('stock')->nullable()->change();
            });
    }

    public function down()
    {
        Schema::dropIfExists('products');

        return false;
    }
};
