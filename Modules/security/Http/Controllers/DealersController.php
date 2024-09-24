<?php

namespace Modules\security\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class DealersController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\security\\Http\\Requests\\DealersRequest";

    /**
     *  DealersController constructor.
     */
    public function __construct()
    {
        $classnamespace='Modules\security\Models\Dealers';
        $classnamespaceservice='Modules\security\Services\DealersService';
        $this->modelClass=new $classnamespace ;
        $this->service= new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:'.self::FORM_REQUEST.','.$classnamespace);
    }


}

