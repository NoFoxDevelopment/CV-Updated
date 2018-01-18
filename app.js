const 	express 	= require('express'),
		app 		= express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

/**************
* APP ROUTING *
**************/

app.get('/', function(req, res){
	res.render('index');
});

app.get('/aboutme', function(req, res){
	res.render('aboutme');
});

app.get('/projects', function(req, res){
	res.render('projects');
});

app.get('/projects/colorgame', function(req, res){
	res.render('colorgame');
});

app.get('/projects/jstennis', function(req, res){
	res.render('jstennis');
});

/***************
* SERVER START *
***************/

app.listen(app.get('port'), function() {
  console.log('CV being served on port ', app.get('port'));
});