function findLarger(num1, num2) {
    return (num1>num2)? num1 : (num1<num2)? num2 : 'they equal';
}

console.log(findLarger(1,2));
console.log(findLarger(4,2));
console.log(findLarger(7,7));
