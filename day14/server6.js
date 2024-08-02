var fs = require('fs');
fs.writeFile('apple.txt', 'could you understaqnd or not!', function (err, file) {
	if (err) throw err;
	console.log('saved!');
});