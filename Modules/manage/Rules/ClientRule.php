<?php
return [
    'create' => [
        'code' => 'required|max:191|unique:' . $this->connection . '.client',
        'user_id' => 'required|exists:' . $this->connection . '.users,id',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'code' => 'max:191|unique:' . $this->connection . '.client,code,' . $this->code . ',code',
        'id' => 'exists:' . $this->connection . '.users,id|unique:' . $this->connection . '.client,id,' . $this->code . ',code',
        'user_id' => 'required|exists:' . $this->connection . '.users,id',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
