<?php


namespace App\Observers;


use App\Helper\Helper;
use App\Models\BaseModel;


class GenerateCodeObserver
{
    public function creating(BaseModel $model)
    {
        $model->code = strtoupper(Helper::quickRandom(8));
    }



}