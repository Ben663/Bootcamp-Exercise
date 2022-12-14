// From function declarations to function expressions
const welcome = function () {
    return 'Welcome to Appleseeds Bootcamp!';
};
const power = function (a) {
    return Math.pow(a, 2);
};
const add = function (a, b = 5) {
    return a + b;
};
// From function expressions to function declarations
function hello () {
    return 'Hello!';
}
function randomNumbers (a, b) {
    return Math.random () * (a - b) + b;
}