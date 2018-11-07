const fs = require("fs");

const cat = function(filename) {
  fs.readFile(filename, function(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
};

module.exports = cat;
