<?php

namespace Modules\masters\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Product_typeController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\masters\\Http\\Requests\\Product_typeRequest";

    /**
     *  Product_typeController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\masters\Models\Product_type';
        $classnamespaceservice='Modules\masters\Services\Product_typeService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

