<?php
return [
    'create' => [
        'name' => 'required|max:191|unique:' . $this->connection . '.pay_ways',
        'instructions' => 'nullable',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => '|unique:' . $this->connection . '.pay_ways,id,' . $this->id . ',id',
        'name' => 'max:191|unique:' . $this->connection . '.pay_ways,name,' . $this->id . ',id',
        'instructions' => 'nullable',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
