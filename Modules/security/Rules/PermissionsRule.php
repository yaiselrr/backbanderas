<?php
return [
    'create' => [
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date',
        'name' => 'required|max:191|unique:' . $this->connection . '.permissions',
        'label' => 'nullable|max:191'
    ],
    'update' => [
        'id' => '|unique:' . $this->connection . '.permissions,id,' . $this->id . ',id',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date',
        'name' => 'max:191|unique:' . $this->connection . '.permissions,name,' . $this->id . ',id',
        'label' => 'nullable|max:191'
    ]
];
