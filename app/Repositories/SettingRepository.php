<?php

namespace App\Repositories;

use App\Interfaces\SettingInterface;
use App\Repositories\BaseRepository;
use App\Setting;

class SettingRepository extends BaseRepository implements SettingInterface
{
    // Protected variable context
    protected $model;

    /**
     * Constructor method to instantiate a instance
     */
    public function __construct(Setting $model)
    {
        $this->model = $model;
    }
}
