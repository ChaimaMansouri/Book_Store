var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  book = require('./api/models/book'), 
  genre=require('./api/models/genre'),
  user=require('./api/models/user'),
  path=require('path'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bookstore'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/client/dist/'));

var Genreroutes=require('./api/routes/genre_routes');
var Bookroutes = require('./api/routes/book_routes'); 
var Userroutes=require('./api/routes/user_routes');
//importing route
Bookroutes(app); //register the route
Genreroutes(app);
Userroutes(app);
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+'/client/dist/index.html'))
})
app.listen(port);


console.log('bookstore RESTful API server started on: ' + port);


