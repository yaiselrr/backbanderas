<?php

namespace Modules\security\Http\Controllers;

use App\Http\Controllers\BaseRestController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use LengthException;
use Modules\security\Models\Permission_users;

class Permission_usersController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\security\\Http\\Requests\\Permission_usersRequest";

    /**
     *  Permission_usersController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\security\Models\Permission_users';
        $classnamespaceservice = 'Modules\security\Services\Permission_usersService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }

    public function handlePermissions(Request $request): JsonResponse
    {
        $arrayPermission = $request->all();
        
        foreach ($arrayPermission['permissions'] as $permission) 
        {
            $permissionFind = DB::table('permissions')->where('label', $permission)->first();

            Permission_users::updateOrCreate(
                ['permission_id' => $permissionFind->id, 'users_id' => $request->user],
                ['permission_id' => $permissionFind->id, 'users_id' => $request->user]
            );
        }

        foreach ($arrayPermission['permissionsOld'] as $permission) 
        {
            $permissionFind = DB::table('permissions')
                                ->where('label', $permission)
                                ->first();
            $permissionUserFind = Permission_users::where('permission_id', $permissionFind->id)->where('users_id', $request->user)->first();

            if ($permissionUserFind && !in_array($permission, $arrayPermission['permissions'])) 
            {
                $permissionUserFind->delete();
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'the user permissions was updated successfully'
        ], 200);
    }
}
