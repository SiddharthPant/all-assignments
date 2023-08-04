// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

// Run easy/4-write-to-file.js to create a file to test your code on.

const fs = require('fs');

const readFromFile = async (filePath) => {
    try {
        let data = await fs.promises.readFile(filePath, 'utf8');
        data = data.replace(/\s+/g, ' ').trim();
        await fs.promises.writeFile(filePath, data);
    }
    catch (err) {
        console.log(err);
    }
}

readFromFile('.vscode/test.txt');

