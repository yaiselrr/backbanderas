<?php

namespace Modules\sale\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Pay_waysController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\sale\\Http\\Requests\\Pay_waysRequest";

    /**
     *  Pay_waysController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\sale\Models\Pay_ways';
        $classnamespaceservice = 'Modules\sale\Services\Pay_waysService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
