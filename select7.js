/* HTTP COLLECT*/
const http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2],function(response){ //the response object is a Node Stream Object. You can treat Node Streams as objects that emit events. The three events that are of most ibterest are: "data", "error" and "end".
	response.pipe(concat(function(data){
		console.log(data.length);	//stdout data length
		console.log(data.toString()); //stdout data. Use .toString to convert to convert from a Buffer
	}));
});


