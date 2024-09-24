<?php

namespace Modules\wp\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Categories_viewController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\wp\\Http\\Requests\\Categories_viewRequest";

    /**
     *  Categories_viewController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\wp\Models\Categories_view';
        $classnamespaceservice='Modules\wp\Services\Categories_viewService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

