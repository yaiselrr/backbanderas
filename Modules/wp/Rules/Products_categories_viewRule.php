<?php
          return [
            'create'=>[
                'product_id' =>'nullable|unique:'.$this->connection.'.products_categories_view',
                'product_title' =>'required|unique:'.$this->connection.'.products_categories_view',
                'product_description' =>'required|unique:'.$this->connection.'.products_categories_view',
                'product_status' =>'required|max:20|unique:'.$this->connection.'.products_categories_view',
                'product_name' =>'required|max:200|unique:'.$this->connection.'.products_categories_view',
                'product_type' =>'required|max:20|unique:'.$this->connection.'.products_categories_view',
                'categorie_id' =>'required|unique:'.$this->connection.'.products_categories_view',
                'categorie_name' =>'required|max:200|unique:'.$this->connection.'.products_categories_view',
                'slug' =>'required|max:200|unique:'.$this->connection.'.products_categories_view',
                'taxonomy' =>'required|max:32|unique:'.$this->connection.'.products_categories_view',
                'id' =>'required|unique:'.$this->connection.'.products_categories_view'
            ],
            'update'=>[
                'product_id' =>'nullable|unique:'.$this->connection.'.products_categories_view,product_id,'.$this->product_id.',product_id',
                'product_title' =>'|unique:'.$this->connection.'.products_categories_view,product_title,'.$this->product_id.',product_id',
                'product_description' =>'|unique:'.$this->connection.'.products_categories_view,product_description,'.$this->product_id.',product_id',
                'product_status' =>'max:20|unique:'.$this->connection.'.products_categories_view,product_status,'.$this->product_id.',product_id',
                'product_name' =>'max:200|unique:'.$this->connection.'.products_categories_view,product_name,'.$this->product_id.',product_id',
                'product_type' =>'max:20|unique:'.$this->connection.'.products_categories_view,product_type,'.$this->product_id.',product_id',
                'categorie_id' =>'|unique:'.$this->connection.'.products_categories_view,categorie_id,'.$this->product_id.',product_id',
                'categorie_name' =>'max:200|unique:'.$this->connection.'.products_categories_view,categorie_name,'.$this->product_id.',product_id',
                'slug' =>'max:200|unique:'.$this->connection.'.products_categories_view,slug,'.$this->product_id.',product_id',
                'taxonomy' =>'max:32|unique:'.$this->connection.'.products_categories_view,taxonomy,'.$this->product_id.',product_id',
                'id' =>'|unique:'.$this->connection.'.products_categories_view,id,'.$this->product_id.',product_id'
            ]
        ];

