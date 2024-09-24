<?php

namespace Modules\security\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class RolesController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\security\\Http\\Requests\\RolesRequest";

    /**
     *  RolesController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\security\Models\Roles';
        $classnamespaceservice = 'Modules\security\Services\RolesService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
