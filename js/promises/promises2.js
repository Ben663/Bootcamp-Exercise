const arr = 'Call the functions once with an array of words'
const arr1 = arr.split(' ');
const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.every(i => typeof i === 'string')) {
            let arr1 = arr.map(el => {
                return el.toUpperCase()
            })
            resolve({ status: 200, arr1 })
        } else {
            reject({ status: 404, message: 'not found el' })
        }
    })
}
const sortWord = (arr) => {
    return new Promise((resolve, reject) => {
        if (Array.isArray(arr) && arr.every(i => typeof i === 'string')) {
            resolve(arr.sort())
        } else {
            reject({ status: 404, message: 'not a string or element' })
        }
    })
}
makeAllCaps(arr1)
.then((res) => {
    console.log('resolve')
    return sortWord(res.arr1);
}).then((arr2Res) => {
    console.log(arr2Res);
}).catch((res) => {
    console.log(res.status, res.message);
})