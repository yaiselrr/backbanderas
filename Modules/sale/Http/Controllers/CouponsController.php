<?php

namespace Modules\sale\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class CouponsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\sale\\Http\\Requests\\CouponsRequest";

    /**
     *  CouponsController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\sale\Models\Coupons';
        $classnamespaceservice = 'Modules\sale\Services\CouponsService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
