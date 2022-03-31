'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function timeConversion(s) {
    //split a string with ':'
    let time = s.split(':');
    //convert string into number
    let hour = parseInt(time[0]);
    //define minute
    let min = time[1];
    //define second
    let sec = time[2].slice(0, 2)
    //format am/pm
    let format = 

    //start special conditions
    //if the format is PM then convert it to 24h
    //check if the hour is less than 12 because of the time between 12pm and 12:59 are the same in 24h
    if (format === 'PM')

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
