<?php
return [
    'create' => [
        'name' => 'required|max:191|unique:' . $this->connection . '.request_statuses',
        'decription' => 'nullable',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => '|unique:' . $this->connection . '.request_statuses,id,' . $this->id . ',id',
        'name' => 'max:191|unique:' . $this->connection . '.request_statuses,name,' . $this->id . ',id',
        'decription' => 'nullable',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
