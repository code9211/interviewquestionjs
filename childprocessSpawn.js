// const { spawn } = require('child_process');

// const child = spawn('ls ', ['-lh']);

// child.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// child.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// child.on('error', (error) => console.log(`error: ${error.message}`));

// child.on('exit', (code, signal) => {
//   if (code) console.log(`Process exit with code: ${code}`);
//   if (signal) console.log(`Process killed with signal: ${signal}`);
//   console.log(`Done ✅`);
// });






const { spawn } = require('child_process');

// Define the command to be executed
const command = 'ping';
const args = ['localhost']; // Arguments for the command

// Spawn the child process
const childProcess = spawn(command, args);

// Listen for stdout data event
childProcess.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

// Listen for stderr data event
childProcess.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

// Listen for process exit event
childProcess.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
