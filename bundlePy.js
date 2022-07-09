(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
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
},{"child_process":1}]},{},[2]);
