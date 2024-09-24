<?php
return [
    'create' => [
        'code' => 'required|max:191|unique:' . $this->connection . '.incoming_products',
        'incoming_date' => 'required|max:191',
        'received' => 'required|boolean',
        'provider_id' => 'required|exists:' . $this->connection . '.provider,id',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => 'required|unique:' . $this->connection . '.incoming_products,id,' . $this->id . ',id',
        'code' => 'required|max:191|unique:' . $this->connection . '.incoming_products,code,' . $this->id . ',id',
        'incoming_date' => 'required|max:191',
        'received' => 'required|boolean',
        'provider_id' => 'required|exists:' . $this->connection . '.provider,id',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
