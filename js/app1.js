const prompt = require("prompt-sync")();




function countryToLiveIn(language, isIsland, population, country) {
    if (language =='english' && population < 50 && !isIsland)
    {
        console.log('You should live in ',country);
    }
    else
    {
        // console.log('does not meet your criteria',country);
        console.log(`${country} does not meet your criterai`);
    }
}
countryToLiveIn('english',false,49,'spain');
