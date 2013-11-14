var http = require('http')
var bl = require('bl')
var url = process.argv[2]

http.get(url, function(resp){
  resp.setEncoding("utf8")
  resp.pipe(bl(function(err, data){
    if(err) { return console.error(data) }
    console.log(data.toString().length);
    console.log(data.toString());
  }))
  
})