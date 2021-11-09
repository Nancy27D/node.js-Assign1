var fs=require('fs');

var read =fs.readFileSync('readMe.txt','utf8')
fs.writeFileSync('writeMe.txt', read); // read: data of readME file will be written, what data to be write
fs.appendFileSync('writeMe.txt',"\n Append test")