<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
   Foreign Keys Dealers table */
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
        $exist_table = $connection->hasTable('dealers');
        
        if ($exist_table) {
            if (!Schema::hasIndex('dealers', 'dealers_user_id_foreign'))
                Schema::table('dealers', function (Blueprint $table) {
                    $table->foreign('user_id')->references('id')->on('users')->onDelete('restrict');
                });
            if (!Schema::hasIndex('dealers', 'dealers_business_sector_id_foreign'))
                Schema::table('dealers', function (Blueprint $table) {
                    $table->foreign('business_sector_id')->references('id')->on('business_sectors')->onDelete('restrict');
                });
        };
    }

    public function down()
    {
        Schema::dropIfExists('dealers');


        return false;
    }
};
