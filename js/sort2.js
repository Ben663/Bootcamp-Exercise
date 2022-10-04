const foods = ["falafel", "sabich", "Hummus", "pizza with extra pineapple"];

// //1
const desSort = foods.sort().reverse();
console.log(desSort);

// // //2
const ascSort = foods.sort();
console.log(ascSort);

// //3
const upSort = foods.sort((a, b) => {
    const lowera = a.toLowerCase();
    const lowerb = b.toLowerCase();
    if (lowera > lowerb) {
        return 1;
    }
    else if (lowera < lowerb) {
        return -1;
    } else
        return 0;
})
console.log(upSort);


const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];
//01
const des = foodsWithUpperCase.sort().reverse();
console.log(des);

//02
const asc = foodsWithUpperCase.sort();
console.log(asc);

const long =foodsWithUpperCase.sort((a , b) => {
    if(a > b){
        return 1;
    }else if ( a < b){
        return -1
    }else
     return 0
})
console.log(long);
