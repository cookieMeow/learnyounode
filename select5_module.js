var fs = require("fs");
var path = require('path');

module.exports = function(dirName, fileExt, callback)
{
	fs.readdir(dirName, function(err,files){
		if (err) {
			return callback(err);
	  	}

	  	// no error, continue filter files
		files = files.filter(function(file){
			if (path.extname(file) == '.' + fileExt)
				return true;
		});

		// all went well, call callback function with 'null' for the error argument
		// to print file names on screen
		return callback(null,files);
	});
}


