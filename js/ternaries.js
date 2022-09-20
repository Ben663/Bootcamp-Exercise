// 01
//function pass1 (password){
//     if(password.length > 7){
//         console.log('Strong');
//     }else if (password.length < 7)
//     {
//         console.log('weak');
//     }
// }
// pass1('abckjhfg');

// 02
// function pass2 (password){
//     password.length < 7 ? console.log('Weak') : console.log('Strong'); ;
// }
// pass2('ac ');
 
// 03
// function pass3 (password){
//     password.length >= 7 && console.log('Strong');
//     password.length < 7 && console.log('Weak');
// }
// pass3('acdegriu');

// 04
function advanced (password){
    password.length > 7 ? password == password.tolowerCase ? 'Strong' : 'VereStrong' : 'Weak';
}
advanced('cPbvmgt');
