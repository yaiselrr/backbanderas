<?php


/**Generate by ASGENS
*@author virtualspot  
*@date Mon May 06 16:54:08 GMT-04:00 2024  
*@time Mon May 06 16:54:08 GMT-04:00 2024  
*/


namespace App\Models;


use App\Scopes\NonDeletedScope;

class BaseModel extends \Ronu\RestGenericClass\Core\Models\BaseModel
{

    protected $hidden = ['created_at','updated_at'];

    public function __construct(array $attributes = []){
        parent::__construct($attributes);
    }

    protected static function booted()
    {
        parent::booted(); // TODO: Change the autogenerated stub
        static::addGlobalScope('non_deleted',new NonDeletedScope());
    }
}
