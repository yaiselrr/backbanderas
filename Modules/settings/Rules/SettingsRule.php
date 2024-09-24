<?php
return [
    'create' => [
        'settings' => 'required|max:191|unique:' . $this->connection . '.settings',
        'settings_value' => 'required',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => 'required|unique:' . $this->connection . '.settings,id,' . $this->id . ',id',
        'settings' => 'required|max:191|unique:' . $this->connection . '.settings,settings,' . $this->id . ',id',
        'settings_value' => 'required',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
