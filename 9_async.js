var http = require('http')
var async = require('async')
var bl = require('bl')

async.map([process.argv[2], process.argv[3], process.argv[4]], getUrl, function(err, results){
  if(err) { return console.error(data) }
  console.log(results.join('\n'));
})

function getUrl(url, cb){
  http.get(url, function(resp){
    resp.setEncoding("utf8")
    resp.pipe(bl(function(err, data){
      if(err) { return console.error(data) }
      cb(null, data.toString())        
    }))  
  })  
}
