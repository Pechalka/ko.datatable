
/**
 * Module dependencies.
 */
var _ = require('lodash');

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


var dynamicSort = function(property, desc) {
    if (desc == 'desc') {
        return function (a, b) {
            return (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
        }   
    }
    return function (a, b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
}

app.get('/getGirls', function(req, res){

	var json = {
		iTotalRecords : 3,
		iTotalDisplayRecords : 3,
	aaData :	[
		{ Name : 'Olga', Size : '2', MemberCount : '5' , Price : '50$'},
		{ Name : 'Monica', Size : '1', MemberCount : '0' , Price : '200$'},
		{ Name : 'Jeacy', Size : '3', MemberCount : '15' , Price : '30$'}
			
	]
	};
	//var field = req.

	var fields = ['Name', 'Size', 'MemberCount', 'Price'];
	var field = fields[req.query["iSortingCols"]];

	var desc = req.query["sSortDir_0"];

	json.aaData = json.aaData.sort(dynamicSort(field, desc));

	res.json(json);
})

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
