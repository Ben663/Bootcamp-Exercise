const numbers = [1, -5, 666, 2, 400, 11];

//1
const numSort = numbers.slice().sort((a , b) => a - b);
console.log(numSort);

//2
const numSortmin = numbers.slice().sort ((a , b) => b - a);
console.log(numSortmin);




