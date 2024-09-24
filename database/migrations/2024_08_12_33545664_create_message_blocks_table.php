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
        $exist_table = $connection->hasTable('message_blocks');

        if (!$exist_table)
            Schema::create('message_blocks', function (Blueprint $table) {
                $table->bigInteger('id')->autoIncrement();
                $table->string('name')->unique('name');
                $table->string('color');
                $table->text('message_text')->nullable();
                $table->string('image')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('message_blocks');

        return false;
    }
};
