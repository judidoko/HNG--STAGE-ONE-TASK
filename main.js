// Variable declaration
let weekDay = document.getElementById("dayOfTheWeek");
let currentTime = document.getElementById("currentUTCTime");
let now = new Date();

// For Current Day of the Week
let currentDayOfTheWeek = now.getDay();
switch (currentDayOfTheWeek) {
  case 0:
    currentDayOfTheWeek = "Sunday";
    break;
  case 1:
    currentDayOfTheWeek = "Monday";
    break;
  case 2:
    currentDayOfTheWeek = "Tuesday";
    break;
  case 3:
    currentDayOfTheWeek = "Wednesday";
    break;
  case 4:
    currentDayOfTheWeek = "Thursday";
    break;
  case 5:
    currentDayOfTheWeek = "Friday";
    break;
  case 6:
    currentDayOfTheWeek = "Saturday";
}
weekDay.innerHTML = currentDayOfTheWeek;

// For Current UTC Time in millisecond
let currentUTCTime = now.getUTCMilliseconds();
document.getElementById("currentUTCTime").innerHTML = currentUTCTime;
