for (var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    });
}

/* there will be printed "10" ten times,
The anonymous function stores a reference to i,
and when the console.log function is called, 
the for loop has already finished its work, and i will contain 10. */

