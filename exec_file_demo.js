const { execFile } = require('child_process');

execFile('./outputsome.sh', (err, stdout, stderr) => {
    if (err) {
        console.log('err', err);
    }
    else if (stdout) {
        console.log('stdout', stdout);
    }
    else {
        console.log('stderr', stderr);
    }
})