/* TIME SERVER */

var net = require('net');

function pad(number){
	if (number <= 9) return ('0'+number);
	else return number;
}

function listener (socket){
	var date = new Date();	//create a time object
	var data = date.getFullYear() + "-" + pad(date.getMonth()+1) + "-" + pad(date.getDate()) + " " + pad(date.getHours()) + ":" + pad(date.getMinutes()) + "\n"; //standardize data
	socket.write(data);	//write to socket
	socket.end();
}

var server = net.createServer(listener);
server.listen(process.argv[2]);