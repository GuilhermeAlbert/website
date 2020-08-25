<?php

use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Setting::firstOrCreate([
            'key'   => 'show_contact_section',
            'value' => false,
        ]);

        App\Setting::firstOrCreate([
            'key'   => 'show_register_screen',
            'value' => false,
        ]);
    }
}
