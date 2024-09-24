<?php

namespace Modules\settings\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Message_blocksController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\settings\\Http\\Requests\\Message_blocksRequest";

    /**
     *  Message_blocksController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\settings\Models\Message_blocks';
        $classnamespaceservice = 'Modules\settings\Services\Message_blocksService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
