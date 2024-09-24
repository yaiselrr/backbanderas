<?php
          return [
            'create'=>[
                'quantity' =>'required',
                'order_id' =>'required|exists:'.$this->connection.'.orders,id',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date',
                'product_id' =>'required|exists:'.$this->connection.'.products,id'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.product_order,id,'.$this->id.',id',
                'quantity' =>'',
                'order_id' =>'exists:'.$this->connection.'.orders,id',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date',
                'product_id' =>'exists:'.$this->connection.'.products,id'
            ]
        ];

