// Blocking code
const fs = require('fs');
const data = fs.readFileSync('output.txt');
console.log(data);
console.log('done');
// Non-blocking code
fs.readFile('output.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
});
console.log('done');

