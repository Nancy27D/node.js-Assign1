var fs =require('fs');
var read =fs.readFileSync('readMe.txt','utf8');     //sync blocking code
console.log(read);