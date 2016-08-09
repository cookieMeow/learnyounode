/*
practice for synchronous file read : fs.readFileSync
and buffer objects: efficientylt represents arbitrary arrays of data, can be converted to string using .toString()
*/
var fs = require('fs');

var buffer = fs.readFile(process.argv[2], function(err,buffer){
	if (err) {
		console.log(err);
		return;
	}

	var str = buffer.toString();

	var arr = str.split("");
	var num = 0;
	for (var i=0; i<arr.length; i++){
		if (arr[i] == '\n') num+=1;
	}

	console.log(num);
});

