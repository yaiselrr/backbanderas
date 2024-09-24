<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Client table */
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
        $exist_table = $connection->hasTable('client');

        if ($exist_table) {
            if (!Schema::hasIndex('client', 'client_user_id_foreign'))
                Schema::table('client', function (Blueprint $table) {
                    $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('client');

        return false;
    }
};
