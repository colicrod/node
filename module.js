var fs = require('fs');

module.exports = function (dirpath, condition, callback) {


        fs.readdir(dirpath, fFilter);
        var result = [];

        function fFilter(err, data) {
            if (err) {
                callback(err, data);
            } else {

                condition='.'+condition;
                for (var i = 0; i < data.length; i++) {
                    if (condition == data[i].substring(data[i].length - condition.length, data[i].length)) result.push(data[i]);
                }

                callback(null, result);

            }
        }


}
