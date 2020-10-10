function factorial(num) {
    if (num<0) {
        return;
    }
    if (num==0) {
        return 1;
    }
        
    var fact = 1;
    for (let i =1; i<=num; i++) {
        fact*=i;
    }
    return fact;
}

console.log(factorial(0));