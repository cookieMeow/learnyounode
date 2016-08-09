/*
This is a practice for module
https://nodejs.org/api/modules.html
A mosule is written in a file and can get the module by var module = require('module/path'), if it is 
in the same directory, write require('./xxmodule.js');
*/

var module = require('./select5_module.js');
var dirName = process.argv[2];
var fileExt = process.argv[3];

var callback = function(err, files){
	if (err){
		console.log(err);
		return;
	}

	files.forEach(function(file){
		console.log(file);
	});
}

//The var module now is a function
module(dirName,fileExt,callback);
