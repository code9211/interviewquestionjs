const { exec } = require('child_process');
const { stdout, stderr } = require('process');

exec('dir',(err,stdout,stderr)=>{
    if(err){
        console.log('err',err);
    }
    else if(stdout){
        console.log('stdout',stdout);
    }
    else{
        console.log('stderr',stderr);
    }
})