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
        $exist_table = $connection->hasTable('permissions');

        if (!$exist_table)
            Schema::create('permissions', function (Blueprint $table) {
                $table->increments('id');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
                $table->string('name')->unique('permissions_name_unique');
                $table->string('label')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('permissions');

        return false;
    }
};
