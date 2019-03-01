@extends('layouts.app')

@section('content')
<div class="container">
<form action="/api/product/13" method="post">
<input type="hidden" name="_method" value="PUT">
<input type="hidden" name="_token" value="<?php echo csrf_token(); ?>"> 
            <!-- Task Name -->
            <div class="form-group">
                <label for="name">Product Id</label>
                    <input type="text" name="id" id="prod-id" placeholder="Product Id" class="form-control"> 
            </div>
            <div class="form-group">
                <label for="name">Product Name</label>
                    <input type="text" name="name" id="prod-name" placeholder="Product Name" class="form-control"> 
            </div>
           <div class="row">
            <div class="col-sm-6">
            <div class="form-group">
                <label for="price">Product Price</label>
                    <input type="number" name="price" id="prod-price" step="0.01" placeholder="Product Price" class="form-control">
            </div>
            </div>
            <div class="col-sm-6">
            <div class="form-group">
                <label for="color">Product Color</label>
               
                    <input type="text" name="color" id="prod-color" placeholder="Product Color" class="form-control">
                
            </div>
            </div>
            </div>


<div class="row">
<div class="col-sm-4">
</div>
<div class="col-sm-2 mx-auto">
               <div class="form-group">
               
                    <button type="submit" class="btn btn-secondary btn-block">
                        <i class="fa fa-plus"></i> save
                    </button>
                
            </div>
            </div>
            <div class="col-sm-2 mx-auto">
            <div class="form-group">
              
                    <a href="{{ url('/') }}" class="btn btn-default btn-block">
                        <i class="fa fa-plus"></i> Cancel
                    </a>
              
            </div>
            </div>
            <div class="col-sm-4">
</div>
            </div>
        </form>
    </div>
</div>
@endsection