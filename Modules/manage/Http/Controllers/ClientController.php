<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class ClientController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\ClientRequest";

    /**
     *  ClientController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\manage\Models\Client';
        $classnamespaceservice='Modules\manage\Services\ClientService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

