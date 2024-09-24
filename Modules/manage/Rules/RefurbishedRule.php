<?php
          return [
            'create'=>[
                'code' =>'required|max:191|unique:'.$this->connection.'.refurbished',
                'product_order_id' =>'required|exists:'.$this->connection.'.product_order,id',
                'amount' =>'required',
                'description' =>'required',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.refurbished,id,'.$this->id.',id',
                'code' =>'max:191|unique:'.$this->connection.'.refurbished,code,'.$this->id.',id',
                'product_order_id' =>'exists:'.$this->connection.'.product_order,id',
                'amount' =>'',
                'description' =>'',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ]
        ];

