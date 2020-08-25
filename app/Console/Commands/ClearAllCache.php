<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Artisan;

class ClearAllCache extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'clear:all';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Cleans the cache of config, routes, views and autoload.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // Remove o conteúdo da pasta de cache
        Artisan::call('optimize:clear');
        $this->info('- Optimize clear was executed.');

        // system('rm -r bootstrap/cache/*');
        // $this->info('- bootstrap/cache/ folder was cleaned.');

        Artisan::call('config:clear');
        $this->info('- Configuration clear was executed.');

        Artisan::call('config:cache');
        $this->info('- Configuration was uncached.');

        Artisan::call('cache:clear');
        $this->info('- Configuration cache was cleared');

        Artisan::call('view:clear');
        $this->info('- Configuration view was cleared.');

        Artisan::call('route:clear');
        $this->info('- Configuration route was cleared.');

        $this->info('====================================');
        $this->info('Executing dump-autoload...');

        system('composer dump-autoload');
        $this->info('- Dump autoload was composed.');

        // exec('rm ' . storage_path('logs/*.log'));
        // $this->info('- Logs folder was cleaned.');

        $this->info('====================================');
        $this->info('Cache commands was executed.');
        $this->info('Project data was configured.');
    }
}
