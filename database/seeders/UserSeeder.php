<?php


namespace Database\Seeders;

use DirectoryTree\Authorization\Permission;
use DirectoryTree\Authorization\Role;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Modules\security\Models\Permission_role;
use Modules\security\Models\Permission_users;
use Modules\security\Models\Role_users;
use Modules\security\Models\Users;

class UserSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $message = "Roles y usuarios iniciales creados";
        DB::beginTransaction();
        try {
            $this->createPermissionsRoles();
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            throw $e;
        }
        $this->command->getOutput()->success($message);
    }


    function createPermissionsRoles()
    {
        $permissions = Permission::all();

        $this->asignPermissionsRolesAdmin($permissions);
        $this->asignPermissionsRolesAdvancedUser($permissions);
        $this->asignPermissionsRolesUser($permissions);
        $this->asignRolesUser($permissions);
    }
    function asignPermissionsRolesAdmin($permissions)
    {
        $role = Role::query()->find(1);

        foreach ($permissions as $permission) {
            Permission_role::updateOrCreate(['permission_id'=>$permission->id,'role_id'=>$role->id],['permission_id'=>$permission->id,'role_id'=>$role->id]);
        }
    }
    function asignPermissionsRolesAdvancedUser($permissions)
    {
        $role = Role::query()->find(2);

        foreach ($permissions as $permission) {
            if ($permission->name != "users.crud") {
                Permission_role::updateOrCreate(['permission_id'=>$permission->id,'role_id'=>$role->id],['permission_id'=>$permission->id,'role_id'=>$role->id]);
            }
        }
    }
    function asignPermissionsRolesUser($permissions)
    {
        $role = Role::query()->find(3);

        foreach ($permissions as $permission) {
            $part = explode(".", $permission->name);
            if ($part[1] != "crud") {
                Permission_role::updateOrCreate(['permission_id'=>$permission->id,'role_id'=>$role->id],['permission_id'=>$permission->id,'role_id'=>$role->id]);
            }
        }
    }
    function asignRolesUser($permissions)
    {
        $userFindAdmin = Users::find(1);
        $roleAdmin = Role::query()->find(1);
        $userFindUserAdvanced = Users::find(2);
        $roleUserAdvanced = Role::query()->find(2);
        $userFindUser = Users::find(3);
        $roleUser = Role::query()->find(3);

        Role_users::updateOrCreate(['role_id'=>$roleAdmin->id,'users_id'=>$userFindAdmin->id],['role_id'=>$roleAdmin->id,'users_id'=>$userFindAdmin->id]);
        Role_users::updateOrCreate(['role_id'=>$roleUserAdvanced->id,'users_id'=>$userFindUserAdvanced->id],['role_id'=>$roleUserAdvanced->id,'users_id'=>$userFindUserAdvanced->id]);
        Role_users::updateOrCreate(['role_id'=>$roleUser->id,'users_id'=>$userFindUser->id],['role_id'=>$roleUser->id,'users_id'=>$userFindUser->id]);

        foreach ($permissions as $permission) {
            Permission_users::updateOrCreate(['permission_id'=>$permission->id,'users_id'=>$userFindAdmin->id],['permission_id'=>$permission->id,'users_id'=>$userFindAdmin->id]);
            if ($permission->name != "security.crud") {
                Permission_users::updateOrCreate(['permission_id'=>$permission->id,'users_id'=>$userFindUserAdvanced->id],['permission_id'=>$permission->id,'users_id'=>$userFindUserAdvanced->id]);
            }
            $part = explode(".", $permission->name);
            if ($part[1] != "crud") {
                Permission_users::updateOrCreate(['permission_id'=>$permission->id,'users_id'=>$userFindUser->id],['permission_id'=>$permission->id,'users_id'=>$userFindUser->id]);
            }
        }
    }
}
