function timeConversion(s) {
  let aMPM = s.slice(-2);
  let timeArray = s.slice(0, -2).split(":");
  
  if (aMPM === "AM" && timeArray[0] === "12") {
    timeArray[0] = "00";
  } else if (aMPM === "PM" && timeArray[0] === "12") {
    timeArray[0] = "12"
  }
  else if (aMPM === "PM") {
      timeArray[0] = parseInt(timeArray[0], 10) + 12
  }
  
  return timeArray.join(":");
}

console.log(timeConversion("12:45:54PM"))


//A or P always will be 2nd to last letter? 
//remove AM/PM no matter what
//if am and 12 change first 2 characters to 00