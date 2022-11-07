import data from './data'

function getNames(arr) {
    const arrNames = arr.map(el => {
        return el.name
    })
    return arrNames;
};

function bornBefor1990(arr) {
    const arrYear = arr.filter(el => {
        const year = el.birthday.substring(el.birthday.length - 4)
        return year < 1990 
    })
    return arrYear
}

export { getNames, bornBefor1990 };