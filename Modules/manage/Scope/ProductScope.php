<?php


namespace Modules\manage\Scope;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;
use Modules\manage\Models\Products;

class ProductScope implements \Illuminate\Database\Eloquent\Scope
{

    /**
     * @inheritDoc
     */
    public function apply(Builder $builder, Products|Model $model)
    {

        if (!App::runningInConsole())
            if ((!auth()->user() || auth()->user()->role_id == 2)) {
                $builder->where($model->getTable() . '.enabled', true);
            }
    }
}