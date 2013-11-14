var fs = require('fs');

var file = fs.readFileSync(process.argv[2], 'utf8');
var numberOfNewlines = file.split('\n').length -1;
console.log(numberOfNewlines);
