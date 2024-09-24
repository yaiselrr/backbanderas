<?php
          return [
            'create'=>[
                'name' =>'required|max:191',
                'code' =>'required|max:191|unique:'.$this->connection.'.products',
                'summary' =>'nullable',
                'description' =>'nullable',
                'deleted_at' =>'nullable|date',
                'price' =>'nullable',
                'rating' =>'nullable',
                'slug_name' =>'nullable|max:255',
                'stock' =>'nullable',
                'enabled' =>'required|boolean',
                'category_id' =>'required'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.products,id,'.$this->id.',id',
                'name' =>'max:191',
                'code' =>'max:191|unique:'.$this->connection.'.products,code,'.$this->id.',id',
                'summary' =>'nullable',
                'description' =>'nullable',
                'deleted_at' =>'nullable|date',
                'price' =>'nullable',
                'rating' =>'nullable',
                'slug_name' =>'max:255',
                'stock' =>'nullable',
                'enabled' =>'boolean',
                'category_id' =>'required'
            ]
        ];

