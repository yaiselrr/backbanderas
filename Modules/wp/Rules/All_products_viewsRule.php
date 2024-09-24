<?php
          return [
            'create'=>[
                'ID' =>'required|unique:'.$this->connection.'.all_products_views',
                'product_title' =>'required|unique:'.$this->connection.'.all_products_views',
                'product_description' =>'required|unique:'.$this->connection.'.all_products_views',
                'product_status' =>'required|max:20|unique:'.$this->connection.'.all_products_views',
                'slug' =>'required|max:200|unique:'.$this->connection.'.all_products_views',
                'product_type' =>'required|max:20|unique:'.$this->connection.'.all_products_views'
            ],
            'update'=>[
                'ID' =>'|unique:'.$this->connection.'.all_products_views,ID,'.$this->ID.',ID',
                'product_title' =>'|unique:'.$this->connection.'.all_products_views,product_title,'.$this->ID.',ID',
                'product_description' =>'|unique:'.$this->connection.'.all_products_views,product_description,'.$this->ID.',ID',
                'product_status' =>'max:20|unique:'.$this->connection.'.all_products_views,product_status,'.$this->ID.',ID',
                'slug' =>'max:200|unique:'.$this->connection.'.all_products_views,slug,'.$this->ID.',ID',
                'product_type' =>'max:20|unique:'.$this->connection.'.all_products_views,product_type,'.$this->ID.',ID'
            ]
        ];

