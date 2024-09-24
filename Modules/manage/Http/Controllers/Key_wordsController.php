<?php

namespace Modules\manage\Http\Controllers;

use App\Http\Controllers\BaseRestController;

class Key_wordsController extends BaseRestController
{
    const FORM_REQUEST = "Modules\\manage\\Http\\Requests\\Key_wordsRequest";

    /**
     *  Key_wordsController constructor.
     */
    public function __construct()
    {
        $classnamespace = 'Modules\manage\Models\Key_words';
        $classnamespaceservice = 'Modules\manage\Services\Key_wordsService';
        $this->modelClass = new $classnamespace;
        $this->service = new $classnamespaceservice(new $classnamespace);
        $this->middleware('data.transform:' . self::FORM_REQUEST . ',' . $classnamespace);
    }
}
