<?php

namespace Modules\security\Http\Controllers;

use App\Http\Controllers\BaseRestController;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Modules\security\Models\Permission_role;

class Permission_roleController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\security\\Http\\Requests\\Permission_roleRequest";

    /**
     *  Permission_roleController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\security\Models\Permission_role';
        $classnamespaceservice='Modules\security\Services\Permission_roleService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }

    public function handlePermissions(Request $request): JsonResponse
    {
        $arrayPermission = $request->all();
        
        foreach ($arrayPermission['permissions'] as $permission) 
        {
            $permissionFind = DB::table('permissions')->where('label', $permission)->first();

            Permission_role::updateOrCreate(
                ['permission_id' => $permissionFind->id, 'role_id' => $request->role],
                ['permission_id' => $permissionFind->id, 'role_id' => $request->role]
            );
        }

        foreach ($arrayPermission['permissionsOld'] as $permission) 
        {
            $permissionFind = DB::table('permissions')
                                ->where('label', $permission)
                                ->first();
            $permissionUserFind = Permission_role::where('permission_id', $permissionFind->id)->where('role_id', $request->role)->first();

            if ($permissionUserFind && !in_array($permission, $arrayPermission['permissions'])) 
            {
                $permissionUserFind->delete();
            }
        }

        return response()->json([
            'success' => true,
            'message' => 'the role permissions was updated successfully'
        ], 200);
    }


}

