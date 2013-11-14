var fs = require('fs')
module.exports = function(path, extension, callback) {
  var regex = new RegExp('\\.' + extension + '$');
  fs.readdir(path, function(err, data) {
    if (err) { return callback(err, null); }

    var files = [];
    for(var i in data){
      if(regex.test(data[i])){
        files.push(data[i]);
      }
    }
    callback(null, files);
    
  });
}

