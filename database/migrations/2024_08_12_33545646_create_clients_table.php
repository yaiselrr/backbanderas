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
        $exist_table = $connection->hasTable('client');

        if (!$exist_table)
            Schema::create('client', function (Blueprint $table) {
                $table->increments('id');
                $table->string('code')->unique('code');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
                $table->boolean('email_subscriptions')->nullable();
                $table->unsignedInteger('user_id');
            });
    }

    public function down()
    {
        Schema::dropIfExists('client');

        return false;
    }
};
