// From function declarations to explicit and implicit return functions (one of each).
const welcome = () => {
    return 'Welcome to Appleseeds Bootcamp!';
};
const power = (a) => a ** 2;

//From function expressions to IIFE functions.
(function (a) {
    return Math.sqrt(a);
})(4);
(function (a, b) {

    return Math.random() * (a - b) + b;
})();