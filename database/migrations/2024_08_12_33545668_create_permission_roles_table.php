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
        $exist_table = $connection->hasTable('permission_role');

        if (!$exist_table)
            Schema::create('permission_role', function (Blueprint $table) {
                $table->integer('permission_id');
                $table->integer('role_id');
                $table->timestamps();
            });
    }

    public function down()
    {
        Schema::dropIfExists('permission_role');

        return false;
    }
};
