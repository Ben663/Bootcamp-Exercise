/*
Create an object with a name property. The object should
also have a method that prints its name and another method
that prints its name after a second with the help of setTimeOut.
in this exercise, you are not allowed to use arrow functions.
*/

const myObj = {
    name: 'Ben',
    printName() {
        console.log(`${this.name}`);
    },
    printNameAfterASecond() {
        setTimeout(this.printName.bind(this), 1000);
    }
}
myObj.printName()
myObj.printNameAfterASecond()


