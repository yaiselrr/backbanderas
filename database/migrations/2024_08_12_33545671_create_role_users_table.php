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
        $exist_table = $connection->hasTable('role_users');

        if (!$exist_table)

            Schema::create('role_users', function (Blueprint $table) {
                $table->integer('role_id');
                $table->integer('users_id');
                $table->timestamps();
            });
    }

    public function down()
    {
        Schema::dropIfExists('role_users');

        return false;
    }
};
