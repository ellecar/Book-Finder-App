<?php

namespace App\Http\Controllers;
use App\Models\book_list;
use Illuminate\Http\Request;

class BookListController extends Controller{
	public function getAllBook(){
		return response()->json(book_list::all(), 200);
	}

	public function insertBook(Request $request)
	{
		// return response()->json(['dd'], 201);
		$insert_book = book_list::create($request->all());
		return response()->json($insert_book, 200);
	}
	public function updateBook($id, Request $request){
		$update = book_list::findOrFail($id);
		$update->update($request->all());
		return response()->json($update, 200);
	}
	
	public function deleteBook($id, Request $request){
		$update = book_list::findOrFail($id);
		$update->delete($request->all());
		return response()->json($update, 200);
	}
	// public function deleteBook($id){
	// 	$data book_list::find($id);
	// 	$data -> delete();
	// }
}