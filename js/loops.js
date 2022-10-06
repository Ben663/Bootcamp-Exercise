const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];
let txt = " ";
for (let x in listOfNeighbours) {
    txt += listOfNeighbours[x] + " ";
}
console.log(`Neighbour: ${txt}`);