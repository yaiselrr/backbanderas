<?php
return [
    'create' => [
        'incoming_product_id' => 'required|exists:' . $this->connection . '.incoming_products,id',
        'format_product_id' => 'required|exists:' . $this->connection . '.format_product,id',
        'amount' => 'required',
        'lote' => 'required|max:191',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => 'required|unique:' . $this->connection . '.incoming_format_product,id,' . $this->id . ',id',
        'incoming_product_id' => 'required|exists:' . $this->connection . '.incoming_products,id',
        'format_product_id' => 'required|exists:' . $this->connection . '.format_product,id',
        'amount' => 'required',
        'lote' => 'required|max:191',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
