//01
function pass1 (password){
    if(password.length > 7){
        console.log('Strong');
    }else if (password.length < 7)
    {
        console.log('weak');
    }
}
pass1('abckjhfg');

//02
function pass2 (password){
    return password.length < 8 ? 'Weak' : 'Strong' 
}
console.log(pass2('hsskkju'));
//03
function pass3 (password){
    let passwordStrong = password.length > 8 && 'Strong';
    return passwordStrong == 'Strong' ? 'Strong' : 'Weak';
}
console.log(pass3('hkfhhj'));

//04
function advanced (password){
    return password.length > 7 && password.match(/[A-Z]/)
    ? 'VereStrong' : password.length > 7  ? 'Strong' : 'Weak'
}
console.log(advanced('nmc'));
