/*
Without running the code below, explain in your own words
what the result of each block of code will be and why.
If there are any faulty outputs, please write on how we can fix
them.
*/

//16.1 block 1
function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();


//16.1 block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
// -- the ex will be (Aurelio De Rosa)
// -- the problem is in a console log becous the arg (test) cant be with a ()


// 16.1 block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a); //--- undefined
console.log(typeof b); //--- number
// -- the proble is in a (a=b=0) becos the b is a global and the a is a local so 
//    the result be undifain


// 16.1 block 4
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();
// --- the problem is the func in the end ex the first func so the ex now is two and two


// 16.1 block 5
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);


// 16.1 block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// -- the first func not chans and the second will be 1 


