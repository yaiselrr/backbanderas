<?php
          return [
            'create'=>[
                'code' =>'required|max:20|unique:'.$this->connection.'.orders',
                'phone' =>'nullable|max:191',
                'address' =>'nullable|max:191',
                'price' =>'required',
                'observations' =>'nullable',
                'request_status_id' =>'required|exists:'.$this->connection.'.request_statuses,id',
                'pay_way_id' =>'nullable|exists:'.$this->connection.'.pay_ways,id',
                'delivery_date' =>'nullable|date',
                'requested_date' =>'required|date',
                'cancelled_at' =>'nullable|date',
                'cancelled_by' =>'nullable|exists:'.$this->connection.'.users,id',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.orders,id,'.$this->id.',id',
                'code' =>'max:20|unique:'.$this->connection.'.orders,code,'.$this->id.',id',
                'phone' =>'nullable|max:191',
                'address' =>'nullable|max:191',
                'price' =>'',
                'observations' =>'nullable',
                'request_status_id' =>'exists:'.$this->connection.'.request_statuses,id',
                'pay_way_id' =>'nullable|exists:'.$this->connection.'.pay_ways,id',
                'delivery_date' =>'nullable|date',
                'requested_date' =>'date',
                'cancelled_at' =>'nullable|date',
                'cancelled_by' =>'nullable|exists:'.$this->connection.'.users,id',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ]
        ];

