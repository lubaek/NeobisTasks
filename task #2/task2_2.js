function reverseNumber(num) {
    num = String(num);
    var newNum = "";
    for (let i = num.length - 1; i >= 0; i--) {
        newNum += num[i];
    }
    return +newNum;
}

console.log(reverseNumber(12345));
