<?php

namespace Modules\security\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class UsersController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\security\\Http\\Requests\\UsersRequest";

    /**
     *  UsersController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\security\Models\Users';
        $classnamespaceservice = 'Modules\security\Services\UsersService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
