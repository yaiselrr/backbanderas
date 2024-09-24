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
        $exist_table = $connection->hasTable('dealers');
        if (!$exist_table)

            Schema::create('dealers', function (Blueprint $table) {
                $table->increments('id');
                $table->string('contact')->unique('contact');
                $table->string('company')->nullable();
                $table->string('cif')->nullable();
                $table->string('company_email')->nullable();
                $table->string('phone')->nullable();
                $table->string('web_page')->nullable();
                $table->text('address')->nullable();
                $table->unsignedInteger('business_sector_id');
                $table->unsignedInteger('user_id');
                $table->timestamp('created_at')->nullable();
                $table->timestamp('updated_at')->nullable();
            });
    }

    public function down()
    {
        Schema::dropIfExists('dealers');


        return false;
    }
};
