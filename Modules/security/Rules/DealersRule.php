<?php
          return [
            'create'=>[
                'contact' =>'required|max:191|unique:'.$this->connection.'.dealers',
                'company' =>'nullable|max:191',
                'cif' =>'nullable|max:191',
                'company_email' =>'nullable|max:191',
                'phone' =>'nullable|max:191',
                'web_page' =>'nullable|max:191',
                'address' =>'nullable',
                'business_sector_id' =>'required',
                'user_id' =>'required',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ],
            'update'=>[
                'id' =>'|unique:'.$this->connection.'.dealers,id,'.$this->id.',id',
                'contact' =>'max:191|unique:'.$this->connection.'.dealers,contact,'.$this->id.',id',
                'company' =>'nullable|max:191',
                'cif' =>'nullable|max:191',
                'company_email' =>'nullable|max:191',
                'phone' =>'nullable|max:191',
                'web_page' =>'nullable|max:191',
                'address' =>'nullable',
                'business_sector_id' =>'',
                'user_id' =>'',
                'created_at' =>'nullable|date',
                'updated_at' =>'nullable|date'
            ]
        ];

