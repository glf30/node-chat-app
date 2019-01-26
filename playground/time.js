var moment = require('moment');

// Jan 1st 1970 00:00:00 am

//1000 = 1 sec
//10000 = 10 sec

// var date = newDate();



// console.log(date.getMonth());

// var date = moment();
// date.format(1,'year');
// console.log(date.format('MMM Do, YYYY'));

var time = moment();
console.log(time.format('h:mm a'));