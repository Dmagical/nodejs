const fs = require('fs');
const path = require('path');

//create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('folder created...');
// });

// create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt.'), 'hello world', err => {
//     if (err) throw err;
//     console.log('file writeen to...');

//     //append to written file
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt.'), ' I love terraria', err => {
//         if (err) throw err;
//         console.log('file writeen to...');
//     });
// });

//read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//rename file
fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'helloworld.txt'),
    err => {
        if (err) throw err;
        console.log('File renamed...');
});

