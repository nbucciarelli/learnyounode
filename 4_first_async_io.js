var fs = require('fs');
fs.readFile(process.argv[2], gotFile);

function gotFile(err, data){
  var count = data
    .toString()
    .split('\n')
    .length - 1
  console.log(count);
}
