/* HTTP CLIENT*/

const http = require('http');

http.get(process.argv[2],function(response){ //the response object is a Node Stream Object. You can treat Node Streams as objects that emit events. The three events that are of most ibterest are: "data", "error" and "end".
	response.setEncoding('utf8'); //the "data" events will emit Strings rather than the standard Node Buffer objects
	response.on("data",function(data){ //Listen to the event. The "data" event is emitted when a chunk of data is available and can be processed
		console.log(data);
	})
});