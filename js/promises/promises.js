const Myage = new Promise ((resolve, reject) => {
    const age = Math.random();
    if (age < 10) {
        resolve();
    }else {
        reject();
    }
});
Myage.then(() => {
    console.log(`the age of you is less`);
});
Myage.catch(() => {
    console.log(`the age of you is greater`); 
});