<?php
          return [
            'create'=>[
                'permission_id' =>'required|unique:'.$this->connection.'.permission_users',
                'users_id' =>'required|unique:'.$this->connection.'.permission_users'
            ],
            'update'=>[
                'permission_id' =>'|unique:'.$this->connection.'.permission_users,permission_id,'.$this->permission_id.',permission_id',
                'users_id' =>'|unique:'.$this->connection.'.permission_users,users_id,'.$this->permission_id.',permission_id'
            ]
        ];

