function Pokemon(pokemonName, pokemonType,
    pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}
const pikachu = new Pokemon('ben', 'splash', ['abscrab' , 'hohohho', 'splesh']);
const rexush = new Pokemon('bob', 'shalom', ['ba', 'ma']);
const pika = new Pokemon('Noam', 'ohohh',['splesh','smash']);

Pokemon.prototype.callPokemon =function () {
    console.log(`I choose you ${this.name}`);
};
Pokemon.prototype.attack = function (Number) {
    console.log(`${this.name} used ${this.attackList[Number -1]}`);
};


console.log((pikachu.callPokemon(), pikachu.attack(3)));


