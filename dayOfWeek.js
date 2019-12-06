// jshint esversion: 7
dayOfWeek = (dateStr) => {
  let d, dow;
  d = new Date(dateStr);
dow = d.getDay();
  if(dow == 0){
    return "Sunday";
  } else if(dow == 1){
    return "Monday";
  } else if(dow == 2){
    return "Tuesday";
  } else if(dow == 3){
    return "Wednesday";
  } else if(dow == 4){
    return "Thursday";
  } else if (dow == 5){
    return "Friday";
  } else if (dow == 6){
    return "Saturday";
  } else{
    return "Please enter a date.";
  }
};


console.log(dayOfWeek("02/25/2005"));
console.log(dayOfWeek("January 12, 2000"));
