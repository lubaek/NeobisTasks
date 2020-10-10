var today = new Date();
var day = today.getDay();
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var hours = today.getHours();
meridiem = (hours>12)? 'PM' : 'AM';
hour = (hours>12)? hours - 12 : hours
var minutes = today.getMinutes();
var seconds = today.getSeconds();

console.log('Today is:', days[day]);
console.log('Current time is:', hour, meridiem, ':', minutes, ':', seconds);
