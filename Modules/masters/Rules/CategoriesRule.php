<?php


return [
    'create' => [
        'category_id' => ['nullable','exists:' . $this->connection . '.categories,id',
        \Illuminate\Validation\Rule::unique('categories')->where(function ($query) {
            return $query->where('name', $this->name)
                ->where('category_id', $this->category_id);
        })],
        'description' => 'required',
        'name' => ['required','max:191',
        \Illuminate\Validation\Rule::unique('categories')->where(function ($query) {
            return $query->where('name', $this->name)
                ->where('category_id', $this->category_id);
        })],
        'slug' => 'nullable|max:191|unique:' . $this->connection . '.categories',
        'deleted_at' => 'nullable|date',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ],
    'update' => [
        'id' => '|unique:' . $this->connection . '.categories,id,' . $this->id . ',id',
        'category_id' => ['nullable','exists:' . $this->connection . '.categories,id',
            \Illuminate\Validation\Rule::unique('categories')->where(function ($query) {
                return $query->where('name', $this->name)
                    ->where('category_id', $this->category_id)
                    ->where('id', $this->id);
            })],
        'description' => '',
        'name' => ['max:191',
            \Illuminate\Validation\Rule::unique('categories')->where(function ($query) {
                return $query->where('name', $this->name)
                    ->where('category_id', $this->category_id)
                    ->where('id', $this->id);
            })],
        'slug' => 'nullable|max:191|unique:' . $this->connection . '.categories,slug,' . $this->id . ',id',
        'deleted_at' => 'nullable|date',
        'created_at' => 'nullable|date',
        'updated_at' => 'nullable|date'
    ]
];
