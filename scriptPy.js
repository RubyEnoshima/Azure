var cp = require('child_process');
var dataToSend;
// spawn new child process to call the python script
const python = cp.spawn('python', ['script.py']);
// collect data from script
python.stdout.on('data', function(data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
});
// in close event we are sure that stream from child process is closed
python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
});