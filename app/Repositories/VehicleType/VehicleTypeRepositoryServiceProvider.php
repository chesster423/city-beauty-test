<?php
namespace App\Repositories\VehicleType;

use Illuminate\Support\ServiceProvider;

class VehicleTypeRepositoryServiceProvider extends ServiceProvider

{

    /**
    * Bootstrap the application services.
    *
    * @return void
    */
    public function boot(){

    }

    /**
    * Register the application services.
    *
    * @return void
    */
    public function register(){

        $this->app->bind('App\Repositories\VehicleType\VehicleTypeInterface', 'App\Repositories\VehicleType\VehicleTypeRepository');

    }

}