<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class ProductController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
			$productList = \App\ExpiviProduct::orderBy('created_at', 'asc')->get();	
			return response()->json(['product'=>$productList, 'message'=>'Product Fetched Successfully']);
		
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Request $request)
	{

	$this->validate($request,[
			'name' => 'required',
			'price' => 'required',
			'color' => 'required'
		]);
		
	  	$product =  \App\ExpiviProduct::create($request->all());   
			return response()->json(['product'=>$product,'message'=>'Product Saved Successfully']);
		
		}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		
		
			
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update(Request $request,$id)
	{
		$product =  \App\ExpiviProduct::findorFail($id);
		$product->update($request->all());
		return  response()->json(['message'=>'Product Updated Successfully']);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}
