<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Laravel</title>

	<link href="{{ asset('/css/app.css') }}" rel="stylesheet">

	<!-- Fonts -->
	<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>
<style>
.card {
margin:20px;
}

.card-header {
background-color:#DCDCDC;
width:100%;
text-align:center;
color:#273746;
padding:1px;
margin-bottom:20px;
border-radius:10px;
}

.btn{
    margin-top:20px;
    margin-bottom:20px;
    
    color:inherit;
    border-radius:10px;
}

.btn-secondary{
    background-color:#D8D8D8;
}

.PlusSign:before{
    content: "\002B";
    margin-right: 6px;
    font-weight:bold;
}

</style>

</head>
<body>
<div class="card">
<div class="card-header">
<h3>Expivi Product Catalog</h3>
</div>
<div class="card-body">
@yield('content')
</div>
</div>


	<!-- Scripts -->
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js"></script>
</body>
</html>
