var http= require('http');
http.createServer(function(req,res){
    res.write("hello! nancy")
    res.end();
}).listen(4000)