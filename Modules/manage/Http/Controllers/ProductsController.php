<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class ProductsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\ProductsRequest";

    /**
     *  ProductsController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\manage\Models\Products';
        $classnamespaceservice='Modules\manage\Services\ProductsService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

