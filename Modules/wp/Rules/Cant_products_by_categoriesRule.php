<?php
          return [
            'create'=>[
                'name' =>'required|max:200|unique:'.$this->connection.'.cant_products_by_categories',
                'slug' =>'required|max:200|unique:'.$this->connection.'.cant_products_by_categories',
                'term_id' =>'required|unique:'.$this->connection.'.cant_products_by_categories',
                'meta_value' =>'nullable|unique:'.$this->connection.'.cant_products_by_categories',
                'meta_key' =>'nullable|max:255|unique:'.$this->connection.'.cant_products_by_categories'
            ],
            'update'=>[
                'name' =>'max:200|unique:'.$this->connection.'.cant_products_by_categories,name,'.$this->name.',name',
                'slug' =>'max:200|unique:'.$this->connection.'.cant_products_by_categories,slug,'.$this->name.',name',
                'term_id' =>'|unique:'.$this->connection.'.cant_products_by_categories,term_id,'.$this->name.',name',
                'meta_value' =>'nullable|unique:'.$this->connection.'.cant_products_by_categories,meta_value,'.$this->name.',name',
                'meta_key' =>'nullable|max:255|unique:'.$this->connection.'.cant_products_by_categories,meta_key,'.$this->name.',name'
            ]
        ];

