


var filtrasi = require('./module');
var dirpath, ext;

if (process.argv.length >= 4) {
    dirpath = process.argv[2];
    ext =  process.argv[3];
} else {
    dirpath = '.';
    ext = 'js';
}

filtrasi(dirpath,ext,pungsiku);

function pungsiku(err,data)
{
    if (!err) {

        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    }
}
