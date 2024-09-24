<?php
          return [
            'create'=>[
                'term_id' =>'required|unique:'.$this->connection.'.products_type_view',
                'name' =>'required|max:200|unique:'.$this->connection.'.products_type_view',
                'taxonomy' =>'required|max:32|unique:'.$this->connection.'.products_type_view',
                'description' =>'required|unique:'.$this->connection.'.products_type_view',
                'term_group' =>'required|unique:'.$this->connection.'.products_type_view'
            ],
            'update'=>[
                'term_id' =>'|unique:'.$this->connection.'.products_type_view,term_id,'.$this->term_id.',term_id',
                'name' =>'max:200|unique:'.$this->connection.'.products_type_view,name,'.$this->term_id.',term_id',
                'taxonomy' =>'max:32|unique:'.$this->connection.'.products_type_view,taxonomy,'.$this->term_id.',term_id',
                'description' =>'|unique:'.$this->connection.'.products_type_view,description,'.$this->term_id.',term_id',
                'term_group' =>'|unique:'.$this->connection.'.products_type_view,term_group,'.$this->term_id.',term_id'
            ]
        ];

