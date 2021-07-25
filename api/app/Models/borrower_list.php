<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class borrower_list extends Model
{
    protected $fillable = [
        'id','b_name','b_title','rented','b_price','b_status','b_date'
    ];
    protected $hidden = [];
}