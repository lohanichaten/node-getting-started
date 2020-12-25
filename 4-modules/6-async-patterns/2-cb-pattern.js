const fs = require('fs');

fs.readFile(__filename,'utf8', function cb(err, data) {
  console.log('File data is', data);
});

console.log('TEST');
