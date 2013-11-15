var express = require("express");
var app = express();
var nano = require("nano")("http://localhost:5984/");
var pkg = require(__dirname + '/package.json');
var db = nano.use('express-foo');
var _ = require('underscore');

app.configure( function() {
  // Any json that comes in, it will automatically give me a body parameter off of the request object. Will jsonify all of the data in the body object
  app.use(express.json());
});

// Handles all routes
//app.all('*')

app.get('/', function(req, res){
  res.send({name: pkg.name, version: pkg.version});
});

app.get('/posts', function(req, res) {
  db.list({ include_docs: true }, function(err, data){
    if (err){ return res.send(500, err); }
    res.send(_(data.rows).pluck('doc'));
  });
});

app.post('/posts', function(req, res) {
  db.insert(req.body).pipe(res);
})

app.listen(3000);
console.log("app is running on 3000")