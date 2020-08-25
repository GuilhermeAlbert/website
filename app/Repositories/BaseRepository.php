<?php

namespace App\Repositories;

use App\Interfaces\BaseInterface;
use Illuminate\Database\Eloquent\Model;

abstract class BaseRepository implements BaseInterface
{
    // Protected context items
    protected $model;

    /**
     * BaseRepository constructor.
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * @return mixed
     */
    public function all()
    {
        return $this->model->all();
    }

    /**
     * @param int input
     * @return mixed
     */
    public function find($input)
    {
        return $this->model->find($input);
    }

    /**
     * @param array $attributes
     * @return mixed
     */
    public function create(array $attributes)
    {
        return $this->model->create($attributes);
    }

    /**
     * @param array $attributes
     * @param Model $object
     * @return mixed
     */
    public function update(array $attributes, Model $object)
    {
        $object->update($attributes);

        if ($object)
            return $object;
        else
            return null;
    }

    /**
     * @param Model $object
     * @return mixed
     */
    public function delete(Model $object)
    {
        return $object->delete();
    }

    /**
     * @param Model $object
     * @return mixed
     */
    public function restore(Model $object)
    {
        $object->restore();

        if ($object)
            return $object;
        else
            return null;
    }

    /**
     * @param Model $object
     * @return mixed
     */
    public function forceDelete(Model $object)
    {
        return $object->forceDelete();
    }
}
