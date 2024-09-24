<?php
          return [
            'create'=>[
                'name' =>'required|max:255|unique:'.$this->connection.'.product_type',
                'description' =>'required'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.product_type,id,'.$this->id.',id',
                'name' =>'max:255|unique:'.$this->connection.'.product_type,name,'.$this->id.',id',
                'description' =>''
            ]
        ];

