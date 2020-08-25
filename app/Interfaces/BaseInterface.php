<?php

namespace App\Interfaces;

use Illuminate\Database\Eloquent\Model;

interface BaseInterface
{
    /**
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes);

    /**
     * @param array $attributes
     * @return mixed
     */
    public function update(array $attributes, Model $object);

    /**
     * @param Model $object
     * @return mixed
     */
    public function delete(Model $object);
}
