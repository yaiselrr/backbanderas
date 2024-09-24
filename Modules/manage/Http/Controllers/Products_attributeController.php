<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Products_attributeController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\Products_attributeRequest";

    /**
     *  Products_attributeController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\manage\Models\Products_attribute';
        $classnamespaceservice='Modules\manage\Services\Products_attributeService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

