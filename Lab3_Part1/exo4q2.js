const fs = require('fs');

function createAndWriteToFile(fileName, text) {
  fs.writeFile(fileName, text, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to the file: ${err.message}`);
    } else {
      console.log('The file has been saved!');
    }
  });
}


const fileName = process.argv[2];
const text = process.argv.slice(3).join(' ');

createAndWriteToFile(fileName, text);



