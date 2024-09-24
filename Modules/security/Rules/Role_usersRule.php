<?php
          return [
            'create'=>[
                'role_id' =>'required|unique:'.$this->connection.'.role_users',
                'users_id' =>'required|unique:'.$this->connection.'.role_users'
            ],
            'update'=>[
                'role_id' =>'|unique:'.$this->connection.'.role_users,role_id,'.$this->role_id.',role_id',
                'users_id' =>'|unique:'.$this->connection.'.role_users,users_id,'.$this->role_id.',role_id'
            ]
        ];

