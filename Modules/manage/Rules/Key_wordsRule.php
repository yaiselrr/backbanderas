<?php
return [
    'create' => [
        'name' => 'required|max:191|unique:' . $this->connection . '.key_words',
        'description' => 'required',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => 'required|unique:' . $this->connection . '.key_words,id,' . $this->id . ',id',
        'name' => 'required|max:191|unique:' . $this->connection . '.key_words,name,' . $this->id . ',id',
        'description' => 'required',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
