<?php


namespace App\Observers;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class HashPasswordObserver
{
    public function updating(Model $model)
    {
        $changed_pass = $model->isDirty('password');
        if ($changed_pass)
            $model->password = Hash::make($model->password);
    }

    public function creating(Model $model)
    {
        $model->password = Hash::make($model->password);
    }
}