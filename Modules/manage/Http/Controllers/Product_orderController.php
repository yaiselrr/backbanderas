<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Product_orderController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\Product_orderRequest";

    /**
     *  Product_orderController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\manage\Models\Product_order';
        $classnamespaceservice='Modules\manage\Services\Product_orderService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

