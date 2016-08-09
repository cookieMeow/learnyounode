/*JUGGLING ASYNC*/
const http = require('http');
var concat = require('concat-stream');
var concat = require('concat-stream');
var res = [];
var count = 0;

function httpGet(i){
	http.get(process.argv[2+i],function(response){ //the response object is a Node Stream Object. You can treat Node Streams as objects that emit events. The three events that are of most ibterest are: "data", "error" and "end".
		response.pipe(concat(function(data){
			res[i]=data.toString(); //stdout data. Use .toString to convert to convert from a Buffer
			count++;
			if (count == 3){
				for (var j=0; j<res.length; j++){
					console.log(res[j]);
				}
			}
		}));
	});
}

for (var i=0; i<3; i++){
	httpGet(i);
}

/*Note:
Wrong answer:
for (var i=0; i<3; i++){
	http.get(process.argv[2+i],function(response){ //the response object is a Node Stream Object. You can treat Node Streams as objects that emit events. The three events that are of most ibterest are: "data", "error" and "end".
		response.pipe(concat(function(data){
			res[i]=data.toString(); //stdout data. Use .toString to convert to convert from a Buffer
			count++;
			if (count == 3){
				for (var j=0; j<res.length; j++){
					console.log(res[j]);
				}
			}
		}));
	});
}
Because of http.get is an async operation, that means by the time your for…loop ended,
With async code, by the time the response function is called, "i" is most likely at 3,
so all results are stored at result[3] ! 
*/