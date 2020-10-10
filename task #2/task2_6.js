function month_name(date) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var mon = date.getMonth();
    return months[mon];
}


console.log(month_name(new Date("10/11/2009"))); 
console.log(month_name(new Date("11/13/2014")));
