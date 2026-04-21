<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User 1',
            'email' => 'test@example1.com',
        ]);

        User::factory()->create([
            'name' => 'Test User 2',
            'email' => 'test@example2.com',
        ]);
    }
}
