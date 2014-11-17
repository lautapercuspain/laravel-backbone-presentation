<?php

class DesignersController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
        return Designer::all();
	}

	
	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
        $data = input::json();
       
        echo json_decode($data);
        // $designer = new Designer();

	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$newDesigner = new Designer();
		
		$input = Input::all();
		
		$newDesigner->name = $input['name'];
		$newDesigner->age  =  $input['age'];
		$newDesigner->task = $input['task'];
		$newDesigner->completed = $input['completed'];
		$response = $newDesigner->save();
		
		//die('design controller');
	}
	public function add(){
		var_dump('expression');
	}
	public function missingMethod($parameters)
	{
		$designer = Designer::find($parameters);
		return Response::json($designer);
            
	}
	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$id = Input::all();
		var_dump($id);
            return $id;

	}
	public function get()
	{
		return ':D';

	}
	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
        return View::make('designers.edit');
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{     
		$data =  Input::all();
		$designer = Designer::find($data['id']);
		foreach ($data as $attr => $value) {
		    $designer->$attr = $value;	
		}
		 
		return var_dump($designer->save());
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy( $id )
	{
		$designer = Designer::find($id);
		$res = $designer->delete();
		var_dump($res);
	}

}
