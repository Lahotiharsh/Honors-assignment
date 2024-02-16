const fs = require("node:fs");

fs.readFile(`${__dirname}/poem.txt`, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log("File content:\n");
  console.log(data);
});
