<?php
          return [
            'create'=>[
                'product_id' =>'required|exists:'.$this->connection.'.products,id',
                'attribute_id' =>'required|exists:'.$this->connection.'.attributes,id'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.products_attribute,id,'.$this->id.',id',
                'product_id' =>'exists:'.$this->connection.'.products,id',
                'attribute_id' =>'exists:'.$this->connection.'.attributes,id'
            ]
        ];

