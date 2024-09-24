<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Categories table */
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
        $exist_table = $connection->hasTable('categories');

        if ($exist_table) {
            if (!Schema::hasIndex('categories', 'categories_category_id_foreign'))
                Schema::table('categories', function (Blueprint $table) {
                    $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('categories');

        return false;
    }
};
