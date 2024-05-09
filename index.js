const http = require('http')
var fs = require("fs");
const request = require('request');
const cp = require('child_process');

let log = console.log
fs.readFile('readfile.txt', "utf-8", function (err, buff) {
  // log('err', err)
  // log('err', buff)
})


// request.get('https://jsonplaceholder.typicode.com/posts',(err,result)=>{
//   console.log("asdfasdf",err,result.body)
// })


setTimeout(() => {
  console.log('this.setinterval');
}, 0);

setImmediate(() => {
  console.log('this setImmediate');
}, 0);

process.nextTick(()=>{
  console.log('this process nexttick');
})

let makePromise=new Promise((resolve,reject)=>{
  // console.log('done');
  resolve('make promise done')
})

makePromise.then(el=>{
  console.log(el);
})



fs.appendFile('readfile.txt', 'tttttttttt ', (err) => {
  if (err)
    log(err)
  log('write successfully')
})

fs.readdir('./', (err, files) => {
  if (err) throw err;
  // console.log(files);
});


// Create a readable stream
const readableStream = fs.createReadStream('readfile.txt');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');
// Pipe the readable stream to the writable stream
// readableStream.pipe(writableStream);

// Handle events for the streams
readableStream.on('open', () => {
  console.log('Readable stream opened.');
});

writableStream.on('finish', () => {
  console.log('Write operation finished.');
});








http.createServer(function (request, response) {
  // Send the HTTP header 
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as "Hello World"
  response.end('Hello World\n');
}).listen(3000);

var os = require("os");
// const { log } = require('console');

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");



