var fs = require('fs');
var regex = new RegExp('\\.' + process.argv[3] + '$');
fs.readdir(process.argv[2], gotDirectory);
function gotDirectory(err, data) {
  for(var i in data){
    if(regex.test(data[i])){
      console.log(data[i]);
    }
  }
}