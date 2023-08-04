// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const writeToFile = (filePath, content) => {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

const filePath = '.vscode/test.txt';

writeToFile(filePath, 'hello     world    my    name   is       raman');

