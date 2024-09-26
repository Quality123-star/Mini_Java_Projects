


const today = new Date();


const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.querySelector(".month").innerHTML = allMonths[today.getMonth()] + "  " + today.getFullYear();