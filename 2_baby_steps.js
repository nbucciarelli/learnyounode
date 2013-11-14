var total = 0;
for(var i in process.argv) {
  if(i > 1){
    total += Number(process.argv[i]);
  }
}
console.log(total);