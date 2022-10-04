/*
Note: We ask you not to solve the bug by finding it with
your eyes but to use the debugging tools we've learned!
*/

// 15.1
function getSum(arr1, arr2) {
    const sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3][5, 66, 23]);
// -- the problem is in a for loop in arr1 and arr2 
// and in a (getSum).. we can fix that we can put a (,) btween a arr


// 15.2
function findSmallest(a, b, c) {
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
findSmalest(52, 66, 2);
// -- the problem is in a ex line lest (findSmalest)


// 15.3 
function getSumOfEven(arr) {
    return arr[2] + arr[4] + arr[6] + arr[8] +
        arr[10];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// -- the problem is in a arr[10] that we dont have 




// 15.4
function calcAverage(arr) {
    var sum;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum;
}
calcAverage([85, 90, 92]);
// -- that dont have ex


// 15.5
function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter + 1;
        }
    } return counter;
}
countOccurrences("ini mini miny moe", "n");
// -- is a loop that not end 







