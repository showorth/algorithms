// defined function
function getTimeAngle(hours, minutes) {
    const shortHandAngle = minutes/2;
    let shorthand = hours;
    const longHandLoc = minutes/5;
    let timeAngle;
    if (longHandLoc > hours) {
        hours === 12 ? shorthand = 0 : shorthand;
        timeAngle = 30*(longHandLoc - shorthand) + shortHandAngle;
    } else {
        timeAngle = 30*(shorthand - longHandLoc) + shortHandAngle;
    }

    if (timeAngle > 180) {
        timeAngle = 360 - timeAngle;
    }

    console.log(timeAngle);
    return timeAngle;
   }
   
   // execute
   getTimeAngle(4,00);
//    getTimeAngle(9,0);
//    getTimeAngle(9,30);