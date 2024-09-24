<?php
          return [
            'create'=>[
                'permission_id' =>'required|unique:'.$this->connection.'.permission_role',
                'role_id' =>'required|unique:'.$this->connection.'.permission_role'
            ],
            'update'=>[
                'permission_id' =>'|unique:'.$this->connection.'.permission_role,permission_id,'.$this->permission_id.',permission_id',
                'role_id' =>'|unique:'.$this->connection.'.permission_role,role_id,'.$this->permission_id.',permission_id'
            ]
        ];

