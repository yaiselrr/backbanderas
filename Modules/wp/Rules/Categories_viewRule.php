<?php
          return [
            'create'=>[
                'term_id' =>'required|unique:'.$this->connection.'.categories_view',
                'name' =>'required|max:200|unique:'.$this->connection.'.categories_view',
                'taxonomy' =>'required|max:32|unique:'.$this->connection.'.categories_view',
                'slug' =>'required|max:200|unique:'.$this->connection.'.categories_view',
                'parent' =>'required|unique:'.$this->connection.'.categories_view',
                'description' =>'required|unique:'.$this->connection.'.categories_view'
            ],
            'update'=>[
                'term_id' =>'|unique:'.$this->connection.'.categories_view,term_id,'.$this->term_id.',term_id',
                'name' =>'max:200|unique:'.$this->connection.'.categories_view,name,'.$this->term_id.',term_id',
                'taxonomy' =>'max:32|unique:'.$this->connection.'.categories_view,taxonomy,'.$this->term_id.',term_id',
                'slug' =>'max:200|unique:'.$this->connection.'.categories_view,slug,'.$this->term_id.',term_id',
                'parent' =>'|unique:'.$this->connection.'.categories_view,parent,'.$this->term_id.',term_id',
                'description' =>'|unique:'.$this->connection.'.categories_view,description,'.$this->term_id.',term_id'
            ]
        ];

