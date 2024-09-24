<?php

namespace Modules\security\Http\Controllers;

use App\Http\Controllers\BaseRestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\security\Models\Permissions;
use Modules\security\Models\Roles;
use Modules\security\Models\Users;

class PermissionsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\security\\Http\\Requests\\PermissionsRequest";

    /**
     *  PermissionsController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\security\Models\Permissions';
        $classnamespaceservice = 'Modules\security\Services\PermissionsService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }

    /**
     * Grant Permission To Role.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function grantPermissionToRole(Request $request, $roleId)
    {
        DB::beginTransaction();
        try {
            $role = Roles::find($roleId);
            $permissions = $request->input('permissions', []);
            $statuscode = 200;
            $result = ['message' => 'grant the permission to role successfully ', 'role' => $role];

            if (!$role) {
                return response()->json(['error' => 'Role Not Found'], 404);
            }

            foreach ($permissions as $permission) {
                $role->permissions()->save($permission->name);
            }

            DB::commit();

            return response()->json($result, $statuscode);
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }

    /**
     * Assign the role to the user.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function assignRoleToUser($userId, $roleId)
    {
        DB::beginTransaction();
        try {
            $user = Users::find($userId);
            if (!$user) {
                return response()->json(['error' => 'User Not Found'], 404);
            }

            $role = Roles::find($roleId);
            if (!$role) {
                return response()->json(['error' => 'Role Not Found'], 404);
            }

            $statuscode = 200;
            $result = ['message' => 'Role successfully assigned to user', 'user' => $user];

            $user->roles()->save($role);

            DB::commit();
            return response()->json($result, $statuscode);
        } catch (\Throwable $e) {
            DB::rollBack();
            throw $e;
        }
    }
}
