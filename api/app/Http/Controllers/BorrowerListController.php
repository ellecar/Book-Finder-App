<?php

namespace App\Http\Controllers;
use App\Models\borrower_list;
use Illuminate\Http\Request;

class BorrowerListController extends Controller{
	public function getAllBorrower(){
		return response()->json(borrower_list::all(), 200);
	}

	public function insertBook(Request $request)
	{
		// return response()->json(['dd'], 201);
		$insert_book = borrower_list::create($request->all());
		return response()->json($insert_book, 200);
	}
	public function updateBorrower($id, Request $request){
		$update = borrower_list::findOrFail($id);
		$update->update($request->all());
		return response()->json($update, 200);
	}
}