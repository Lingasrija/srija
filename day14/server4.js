var http = require('http');
 var uc = require('Upper-case');
http.createServer(function (rea, res) {
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(UC.UpperCase("Wish u all success"));

	res.end();

}).listen(8080);