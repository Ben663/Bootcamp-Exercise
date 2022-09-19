
const prompt = require("prompt-sync")();
//4.2
let jason = prompt("Enter a grade: ");
jason = Number(jason);
const score= (num) =>{
    if(num <= 100 && num >= 90){
        console.log('A');
    }
    else if(num < 90 && num >= 80)
    {
        console.log('B');
    }
    else if (num < 80 && num >= 70)
    {
        console.log('C');
    }
    else if (num < 70 && num >= 65)
    {
        console.log('D')
    }
    else if( num < 65 && num >= 0){
        console.log('F');
    }
}
console.log(score(jason));
//4.4
// const Boom = (n)=>{
//     for(let i =1; i<=n; i++)
//     {
//         if(i%7===0&& i===7){
//             console.log('Boom=Boom');
//         }else if (i%7==0){
//             console.log('boom');
//            }
//         else{
//             console.log(i);
//         }
//     }
// }
// Boom(70)


// //4.5
// const leapyears= (year)=>{
//     if((year% 4===0 && year %100 !== 0) ||(year% 400 ===0 )){
//         console.log("It is indeed a leap year");
//     }
//     else{
//         console.log("This is not a leap year.");
//     }
// }
// console.log(leapyears(2012));

