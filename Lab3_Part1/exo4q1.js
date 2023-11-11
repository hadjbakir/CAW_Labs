const fs = require('fs');

function createAndWriteToFile(text) {
  const fileName = 'f1.txt';

  fs.writeFile(fileName, text, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to the file: ${err.message}`);
    } else {
      console.log('The file has been saved!');
    }
  });
}
const text = process.argv.slice(2).join(' ');
createAndWriteToFile(text);
