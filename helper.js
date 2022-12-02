const path = require('path');
const fs = require('fs');

function getFile(directory) {
  const filename = path.join(directory, '/input.txt');
  return fs.readFileSync(filename, 'utf-8');
}

module.exports = {
  getFile,
};
