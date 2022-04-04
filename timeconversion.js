
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
    let format = time[2].slice(2);

    //start special conditions
    //if the format is PM then convert it to 24h
    //check if the hour is less than 12 because of the time between 12pm and 12:59 are the same in 24h
    if (format === 'PM' && hour === 12) {
        hour +=12;
    }
    //check for AM format
    //if true then hour will be zero otherwise no change in AM
    else if(format === 'AM' && hour === 12) {
        hour = 0;
    }

    //special cases for hour
    //be sure to prefix with a 0 for testing and AM times like '0200' or '0100'
    hour = (hour < 10) ? ('0' + hour) : hour;

    //combine all 3 
    let finaltime = hour + ':' + min + ':' + sec;
   
    return finaltime;
}