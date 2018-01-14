const 	express 	= require('express'),
		app 		= express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

/**************
* APP ROUTING *
**************/

app.get('/', function(req, res){
	res.render('index');
});

app.get('/aboutme', function(req, res){
	res.render('aboutme');
});

app.get('/colorgame', function(req, res){
	res.render('colorgame');
});

app.get('/jstennis', function(req, res){
	res.render('jstennis');
});

/***************
* SERVER START *
***************/

app.listen(3000, function(){
	console.log('CV being served on port 3000');
});