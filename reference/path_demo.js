const path = require('path');

//basename : base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create path object - has dot extension to get specific value 
console.log(path.parse(__filename));

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));