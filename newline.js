
var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var n = buffer.toString().split('\n').length-1;

console.log(n);

// ga ucu ah

