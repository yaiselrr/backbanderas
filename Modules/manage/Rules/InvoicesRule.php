<?php
          return [
            'create'=>[
                'code' =>'required|max:20|unique:'.$this->connection.'.invoices',
                'year' =>'required',
                'phone' =>'nullable|max:191',
                'address' =>'nullable|max:191',
                'subtotal' =>'required',
                'total' =>'required',
                'pay_way' =>'required|max:191',
                'observations' =>'nullable',
                'invoice_date' =>'required|date',
                'order_id' =>'required|exists:'.$this->connection.'.orders,id',
                'prefix' =>'required|max:191',
                'discount' =>'required',
                'cancelled_at' =>'nullable|date',
                'cancelled_by' =>'nullable',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.invoices,id,'.$this->id.',id',
                'code' =>'max:20|unique:'.$this->connection.'.invoices,code,'.$this->id.',id',
                'year' =>'',
                'phone' =>'nullable|max:191',
                'address' =>'nullable|max:191',
                'subtotal' =>'',
                'total' =>'',
                'pay_way' =>'max:191',
                'observations' =>'nullable',
                'invoice_date' =>'date',
                'order_id' =>'exists:'.$this->connection.'.orders,id',
                'prefix' =>'max:191',
                'discount' =>'',
                'cancelled_at' =>'nullable|date',
                'cancelled_by' =>'nullable',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ]
        ];

