/* Without running the code below, explain in your own
words what the result of each block of code will be and
why.
*/

// 17.1 block 1

var b = 1; 
function someFunction(number) {
    function otherFunction(input) { 
        return b; 
    }
    b = 5; 
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

// --- the result will be => 5 becous the b =5 came befor a return  func (otherFunction).

// 17.1 block 2

var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a); 
//---- the result will be => 1 becous the ex the func is is empty so ex the result of var the global

// 17.1 block 3

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}

// --- the result will be a 3 tree time and is wait a 1 seconds