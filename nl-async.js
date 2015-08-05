
var fs = require('fs');

var buffer = fs.readFile(process.argv[2],'utf-8',pungsiku);

function pungsiku(err,data){

  if(!err) {
    var nl = data.split('\n').length-1;

    console.log(nl);
    }

}
