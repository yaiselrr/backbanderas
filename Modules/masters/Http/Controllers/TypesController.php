<?php

namespace Modules\masters\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class TypesController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\masters\\Http\\Requests\\TypesRequest";

    /**
     *  TypesController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\masters\Models\Types';
        $classnamespaceservice='Modules\masters\Services\TypesService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

