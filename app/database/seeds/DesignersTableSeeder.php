<?php

class DesignersTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		// DB::table('designers')->truncate();

		$designers = array(
	    	'name' => 'Sparky', 'age' => 5, 'task'=>'site design', 'completed'=>false,
	    	'name' => 'Joe', 'age' => 31, 'task'=>'sell the product', 'completed'=>false,
	    	'name' => 'Lautaro', 'age' => 31, 'task'=>'success the product', 'completed'=>false
		);

		// Uncomment the below to run the seeder
		 DB::table('designers')->insert($designers);
	}

}
