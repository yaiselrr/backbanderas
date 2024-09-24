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
        $exist_table = $connection->hasTable('users');

        if (!$exist_table)
            Schema::create('users', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name');
                $table->string('email')->unique('email');
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password');
                $table->text('addresses')->nullable();
                $table->text('phones')->nullable();
                $table->dateTime('last_login_at')->nullable();
                $table->string('last_login_ip')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('users');

        return false;
    }
};
