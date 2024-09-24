<?php
return [
    'create' => [
        'name' => 'required|max:191|unique:' . $this->connection . '.message_blocks',
        'color' => 'required|max:255',
        'message_text' => 'nullable',
        'image' => 'nullable|max:3000',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => '|unique:' . $this->connection . '.message_blocks,id,' . $this->id . ',id',
        'name' => 'max:191|unique:' . $this->connection . '.message_blocks,name,' . $this->id . ',id',
        'color' => 'max:255',
        'message_text' => 'nullable',
        'image' => 'nullable|max:3000',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
