/* HTTP FILE SERVER */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	var fileName = process.argv[3];
	var stats;

	try{
		stats = fs.lstatSync(fileName);
	} catch(e){
		//Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404. 
		res.writeHead(404, {'Content-type': 'text/plain'});
		res.write('404 Not Found\n');
		res.end();
		return;
	}

	res.writeHead(200, {'Content-type': 'text/plain'});
	var fileStream = fs.createReadStream(fileName);
	fileStream.pipe(res);

})
server.listen(process.argv[2]);