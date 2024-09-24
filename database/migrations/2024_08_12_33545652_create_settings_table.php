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
        $exist_table = $connection->hasTable('settings');

        if (!$exist_table)
            Schema::create('settings', function (Blueprint $table) {
                $table->increments('id');
                $table->string('settings')->unique('settings');
                $table->text('settings_value');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('settings');

        return false;
    }
};
