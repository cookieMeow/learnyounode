var num = process.argv.length;
var sum = 0;
for (var i=2; i<num; i++){
	sum+=parseInt(process.argv[i]);
}

console.log(sum);

// console.log(process.argv);