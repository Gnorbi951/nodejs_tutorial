
var url = 'http://google.com';

function log(message) {
    // Send HTTP request.
    console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url;