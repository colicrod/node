
var fs = require('fs');
var filter;

//console.log(process.argv.length);

if(process.argv.length<4)
{
  var s='./';
  filter='.iml';
}
else {
  var s=process.argv[2];
  filter='.'+process.argv[3];
}



var buffer = fs.readdir(s,pungsiku);


function pungsiku(err,data){

//  console.log('here');

  if(!err) {
    for (var i = 0; i < data.length; i++) {

  //    console.log(data[i]);
      if (data[i].substring(data[i].length-filter.length,data[i].length)==filter)
        console.log(data[i]);

    }
  }

}
