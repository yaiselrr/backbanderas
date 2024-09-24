<?php

namespace Modules\security\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Role_usersController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\security\\Http\\Requests\\Role_usersRequest";

    /**
     *  Role_usersController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\security\Models\Role_users';
        $classnamespaceservice='Modules\security\Services\Role_usersService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

