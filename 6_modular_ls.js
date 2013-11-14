var mymodule = require('./6_2_modular_ls.js')
mymodule(process.argv[2], process.argv[3], directory)

function directory(err, list) {
  if (err) { return console.log(err); }
  list.forEach(function(name) {
    console.log(name);
  });
  
};