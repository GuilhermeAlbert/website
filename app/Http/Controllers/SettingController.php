<?php

namespace App\Http\Controllers;

use App\Repositories\SettingRepository;
use App\Http\Requests\Setting\{Index, Update};
use App\Http\Resources\{DefaultErrorResource, DefaultResource};
use App\Utils\{HttpStatusCodeUtils};

class SettingController extends Controller
{
    // Protected items context
    protected $model;

    /**
     * Constructor method
     * @param SettingRepository $model
     */
    public function __construct(SettingRepository $model)
    {
        $this->model = $model;
    }

    /**
     * Returns all settings
     * @api {GET} /api/settings
     * @param Index $request
     * @return Resource json
     */
    public function index(Index $request)
    {
        $object = $this->model->all();
        return new DefaultResource($object);
    }

    /**
     * Update a specific setting
     * @api {PATCH} /api/settings
     * @param Update $request
     * @return Resource json
     */
    public function update(Update $request)
    {
        $object = $this->model->update($request->inputs, $request->setting);
        return new DefaultResource($object);
    }
}
