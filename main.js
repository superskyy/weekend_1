// var fs = require("fs");

// // Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('input.txt', 'r+', function(err, fd) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("File opened successfully!");     
// });

// var fs = require("fs");

// console.log("Going to get file info!");
// fs.stat('input.txt', function (err, stats) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log(stats);
//    console.log("Got file info successfully!");
   
//    // Check file type
//    console.log("isFile ? " + stats.isFile());
//    console.log("isDirectory ? " + stats.isDirectory());    
// });

var fs = require("fs");
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function() {
   console.log(data);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");