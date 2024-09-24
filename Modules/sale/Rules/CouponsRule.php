<?php
return [
    'create' => [
        'code' => 'required|max:255',
        'type_id' => 'required|exists:' . $this->connection . '.types,id',
        'coupon_value' => 'required',
        'available_quantity' => 'required',
        'start_date' => 'nullable|date',
        'end_date' => 'nullable|date',
        'conditions' => 'required'
    ],
    'update' => [
        'id' => '|unique:' . $this->connection . '.coupons,id,' . $this->id . ',id',
        'code' => 'max:255',
        'type_id' => 'required|exists:' . $this->connection . '.types,id',
        'coupon_value' => '',
        'available_quantity' => '',
        'start_date' => 'nullable|date',
        'end_date' => 'nullable|date',
        'conditions' => ''
    ]
];
