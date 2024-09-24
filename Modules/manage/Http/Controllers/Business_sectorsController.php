<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Business_sectorsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\Business_sectorsRequest";

    /**
     *  Business_sectorsController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\manage\Models\Business_sectors';
        $classnamespaceservice='Modules\manage\Services\Business_sectorsService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

