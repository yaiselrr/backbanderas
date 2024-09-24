<?php

namespace Modules\masters\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Request_statusesController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\masters\\Http\\Requests\\Request_statusesRequest";

    /**
     *  Request_statusesController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\masters\Models\Request_statuses';
        $classnamespaceservice = 'Modules\masters\Services\Request_statusesService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
