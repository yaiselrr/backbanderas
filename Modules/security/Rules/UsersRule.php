<?php
return [
    'create' => [
        'name' => 'required|max:191',
        'email' => 'required|max:191|unique:' . $this->connection . '.users',
        'email_verified_at' => 'nullable|date',
        'password' => 'required|max:191',
        'addresses' => 'nullable',
        'phones' => 'nullable',
        'last_login_at' => 'nullable|date',
        'last_login_ip' => 'nullable|max:191',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date',
        'role_id' => 'required|exists:' . $this->connection . '.roles,id'
    ],
    'update' => [
        'id' => 'required|unique:' . $this->connection . '.users,id,' . $this->id . ',id',
        'name' => 'required|max:191',
        'email' => 'required|max:191|unique:' . $this->connection . '.users,email,' . $this->id . ',id',
        'email_verified_at' => 'nullable|date',
        'addresses' => 'nullable',
        'phones' => 'nullable',
        'last_login_at' => 'nullable|date',
        'last_login_ip' => 'nullable|max:191',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date',
        'role_id' => 'required|exists:' . $this->connection . '.roles,id'
    ]
];
