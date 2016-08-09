var fs = require("fs");
var path = require('path');
var res = [];

fs.readdir(process.argv[2], function(err,files){
	if (err) {
		console.log(err);
   	 	return;
  	}

	var target = process.argv[3];

	for (var i=0; i<files.length; i++){
		var temp = files[i].split(".");
		if (temp[1] == target){
			console.log(files[i]);
		}
	}
	//更好的写法：
	/*
	files.forEach(function(file){
		var temp = file.split(".");
		if (temp[1] == target){
			console.log(file);
		}
		// if (path.extname(file) == '.' + process.argv[3])
		// 	console.log(file);
	});
	*/
});