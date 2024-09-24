<?php
return [
    'create' => [
        'role_father_id' => 'nullable|exists:' . $this->connection . '.roles,id',
        'name' => 'required|max:191|unique:' . $this->connection . '.roles',
        'description' => 'required',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => 'required|unique:' . $this->connection . '.roles,id,' . $this->id . ',id',
        'role_father_id' => 'nullable|exists:' . $this->connection . '.roles,id',
        'name' => 'required|max:191|unique:' . $this->connection . '.roles,name,' . $this->id . ',id',
        'description' => 'required',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
