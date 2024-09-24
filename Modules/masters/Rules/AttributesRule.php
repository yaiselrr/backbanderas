<?php
return [
    'create' => [
        'name' => 'required|max:191|unique:' . $this->connection . '.attributes',
        'type' => 'nullable|max:191',
        'strcuture' => 'nullable',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => '|unique:' . $this->connection . '.attributes,id,' . $this->id . ',id',
        'name' => 'max:191|unique:' . $this->connection . '.attributes,name,' . $this->id . ',id',
        'type' => 'nullable|max:191',
        'strcuture' => 'nullable',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
