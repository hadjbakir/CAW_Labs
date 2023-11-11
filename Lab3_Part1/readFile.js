const fs = require("fs");

function displayFileContent(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading the file: ${err.message}`);
    } else {
      console.log(data);
    }
  });
}
const filePath = "test.txt";
displayFileContent(filePath);
