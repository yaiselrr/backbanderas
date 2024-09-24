<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Rols table */
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
        $exist_table = $connection->hasTable('rols');

        if ($exist_table) {
            if (!Schema::hasIndex('rols', 'rols_role_father_id_foreign'))
                Schema::table('rols', function (Blueprint $table) {
                    $table->foreign('role_father_id')->references('id')->on('rols')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('rols');

        return false;
    }
};
