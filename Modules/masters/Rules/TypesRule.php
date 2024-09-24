<?php
          return [
            'create'=>[
                'name' =>'required|max:191|unique:'.$this->connection.'.types',
                'description' =>'nullable',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.types,id,'.$this->id.',id',
                'name' =>'max:191|unique:'.$this->connection.'.types,name,'.$this->id.',id',
                'description' =>'nullable',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ]
        ];

