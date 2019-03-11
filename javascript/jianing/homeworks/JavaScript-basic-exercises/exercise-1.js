//
//Exercise - 1  Write a JavaScript program to display the current day and time in the following format.
//Today is: Tuesday.=>need to use getDay();以及arr.length=7 && arr[0] ='Sunday'；
//Current time is: 10 PM: 30 : 38 =>getHours() output (0~23),need to separate AM/PM;need getMinutes() && getSeconds();
//input: null; output: Today is: Tuesday./n Current time is: 10 PM: 30 : 38; note: (0 AM ... 11AM ..12PM.1PM....11pm...0am)



var currentTime = new Date(); //D大写 local current time;
var today = currentTime.getDay(); //a number between 0-6;
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //Sunday是weekdays[0],数组元素为string,注意拼写；
var currentWeekday = weekdays[today];
var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();
var currentSecond = currentTime.getSeconds();
var amOrPm = (currentHour >= 12) ? "PM" : "AM"; // is a function; here range of currentHour is (0 -23),0-11>>AM,12-23>>Pm;
currentHour = (currentHour > 12) ? currentHour - 12 : currentHour; //12pm instead of 0PM;/here currentHour's range is (0 ~ 12), 

document.write('Today is : ' + currentWeekday + '.');
document.write('Current time is: ' + currentHour + ' ' + amOrPm + ' : ' + currentMinute + ' : ' + currentSecond);