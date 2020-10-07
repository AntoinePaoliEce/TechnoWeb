var http = require('http');

// Create a server object
http.createServer(function (req, res) {

    // http header
    res.writeHead(200, {'Content-Type': 'text/html'});

    var url = req.url;

    if(url ==='/page_2') {
        res.write('here is page 2');
        res.end();
    }
    else if(url ==='/page_3') {
        res.write('here is page 3');
        res.end();
    }
    else {
	res.write('<a href=\'localhost:3000/page_2\'>page_2</a>homepage: type in url to change page');
        res.end();
    }
}).listen(3000, function() {

    // The server object listens on port 3000
    console.log("server start at port 3000");
});
