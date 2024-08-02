var fs = require('fs');
fs.appendFile('apple.txt', 'yes, white crows are fly!', function (err, file) {
	if (err) throw err;
	console.log('updated!');
});