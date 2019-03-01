<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class ExpiviProduct extends Model {

	//
	protected $table = 'expiviProducts';
	protected $fillable = ['name','price','color'];
}
