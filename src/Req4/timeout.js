import fs from "fs";

process.on("exit", (code) => {
  console.log(`exit event called with code: ${code}`);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("unhandledRejection event called:");
  console.error("Reason:", reason);
});

const readFileAsync = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

readFileAsync("incorrectFileName.txt")
  .then((data) => {
    console.log("File data:", data.toString());
  })
  .catch((error) => {
    console.error("Error reading file:", error);
    throw new Error("Custom error from catch handler");
  });

// Exiting the process after a delay to trigger 'exit' event
setTimeout(() => {
  process.exit(0);
}, 1000);
