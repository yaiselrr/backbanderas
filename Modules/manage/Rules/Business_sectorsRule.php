<?php
return [
    'create' => [
        'name' => 'required|max:191|unique:' . $this->connection . '.business_sectors',
        'description' => 'required',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' =>'|unique:'.$this->connection.'.business_sectors,id,'.$this->id.',id',
        'name' => 'required|max:191|unique:' . $this->connection . '.business_sectors,name,' . $this->id . ',id',
        'description' => 'required',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
