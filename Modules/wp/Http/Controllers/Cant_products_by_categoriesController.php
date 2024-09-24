<?php

namespace Modules\wp\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Cant_products_by_categoriesController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\wp\\Http\\Requests\\Cant_products_by_categoriesRequest";

    /**
     *  Cant_products_by_categoriesController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\wp\Models\Cant_products_by_categories';
        $classnamespaceservice='Modules\wp\Services\Cant_products_by_categoriesService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

