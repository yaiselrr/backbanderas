<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class RefurbishedController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\RefurbishedRequest";

    /**
     *  RefurbishedController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\manage\Models\Refurbished';
        $classnamespaceservice='Modules\manage\Services\RefurbishedService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

