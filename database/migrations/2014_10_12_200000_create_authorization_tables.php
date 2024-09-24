<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthorizationTables extends Migration
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

        $exist_table = $connection->hasTable('roles');

        if (!$exist_table)
            Schema::create('roles', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('role_father_id')->nullable();
                $table->timestamps();
                $table->string('name')->unique()->index();
                $table->string('label')->nullable();
                $table->text('description')->nullable();
            });

        $exist_table = $connection->hasTable('permissions');

        if (!$exist_table)
            Schema::create('permissions', function (Blueprint $table) {
                $table->increments('id');
                $table->timestamps();
                $table->string('name')->unique()->index();
                $table->string('label')->nullable();
            });

        $exist_table = $connection->hasTable('permission_role');

        if (!$exist_table)
            Schema::create('permission_role', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('permission_id');
                $table->unsignedInteger('role_id');
                $table->unique(['permission_id', 'role_id']);
            });

        $exist_table = $connection->hasTable('permission_users');

        if (!$exist_table)
            Schema::create('permission_users', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('permission_id');
                $table->unsignedInteger('users_id');
                $table->unique(['permission_id', 'users_id']);
            });

        $exist_table = $connection->hasTable('role_users');

        if (!$exist_table)
            Schema::create('role_users', function (Blueprint $table) {
                $table->increments('id');
                $table->unsignedInteger('role_id');
                $table->unsignedInteger('users_id');
                $table->unique(['role_id', 'users_id']);
            });

        /* Create RelationsShip Foreign Key */

        $exist_table = $connection->hasTable('roles');

        if ($exist_table) {
            if (!Schema::hasIndex('roles', 'roles_role_father_id_foreign'))
                Schema::table('roles', function (Blueprint $table) {
                    $table->foreign('role_father_id')->references('id')->on('roles')->onDelete('restrict');
                });
        };

        $exist_table = $connection->hasTable('permission_role');

        if ($exist_table) {
            if (!Schema::hasIndex('permission_role', 'permission_role_permission_id_foreign'))
                Schema::table('permission_role', function (Blueprint $table) {
                    $table->foreign('permission_id')->references('id')->on('permissions')->onDelete('restrict');
                });
            if (!Schema::hasIndex('permission_role', 'permission_role_id_foreign'))
                Schema::table('permission_role', function (Blueprint $table) {
                    $table->foreign('role_id')->references('id')->on('roles')->onDelete('restrict');
                });
        };

        $exist_table = $connection->hasTable('permission_users');

        if ($exist_table) {
            if (!Schema::hasIndex('permission_users', 'permission_users_permission_id_foreign'))
                Schema::table('permission_users', function (Blueprint $table) {
                    $table->foreign('permission_id')->references('id')->on('permissions')->onDelete('restrict');
                });
            if (!Schema::hasIndex('permission_users', 'permission_users_id_foreign'))
                Schema::table('permission_users', function (Blueprint $table) {
                    $table->foreign('users_id')->references('id')->on('users')->onDelete('restrict');
                });
        };

        $exist_table = $connection->hasTable('role_users');

        if ($exist_table) {
            if (!Schema::hasIndex('role_users', 'role_users_role_id_foreign'))
                Schema::table('role_users', function (Blueprint $table) {
                    $table->foreign('role_id')->references('id')->on('roles')->onDelete('restrict');
                });
            if (!Schema::hasIndex('role_users', 'role_users_users_id_foreign'))
                Schema::table('role_users', function (Blueprint $table) {
                    $table->foreign('users_id')->references('id')->on('users')->onDelete('restrict');
                });
        };
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_user');
        Schema::dropIfExists('permission_role');
        Schema::dropIfExists('permission_user');
        Schema::dropIfExists('permissions');
        Schema::dropIfExists('roles');
    }
}
