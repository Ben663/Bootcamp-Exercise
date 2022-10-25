function Check(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve();
        } else {
            reject();
        }
    })
    .then(() => {
        console.log(`the number of is greater `);
    })
    .catch(() => {
        console.log(`the number of is less`);
    });
    
}
Check(6);
Check(16);
