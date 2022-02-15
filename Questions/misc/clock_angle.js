function clockAngle(hour, minute){
    if (hour === 12){
      hour = 0
    }
    if (minute === 60){
      minute = 0
      hour += 1
    }
    
    let hourAngle = .5 * (hour * 60 + minute)
    let minuteAngle = minute * 6
    let clockAngle = Math.abs(hourAngle - minuteAngle)
    
    if(clockAngle > 180){
      clockAngle = 360 - clockAngle
    }
    return clockAngle
}

// console.log(clockAngle(10, 15), " degrees")
// console.log(clockAngle(3, 30), " degrees")
// console.log(clockAngle(9, 15), " degrees")
// console.log(clockAngle(10, 15), " degrees")

/* 
    Time Complexity: O(1)
    Space Complexity: O(1)
*/