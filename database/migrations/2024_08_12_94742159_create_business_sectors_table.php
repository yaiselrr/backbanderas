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
        $exist_table = $connection->hasTable('business_sectors');
        if (!$exist_table)
            Schema::create('business_sectors', function (Blueprint $table) {
                $table->increments('id');
                $table->string('name')->unique('name');
                $table->text('description')->nullable();
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('business_sectors');

        return false;
    }
};
