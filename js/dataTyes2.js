function countryInfo(country, population, capitalCity) {
    return `${country} has  ${population} people and its capital city is  ${capitalCity}`;
  }
  
  const US = countryInfo('US', '14,450,100', 'Jerusalem');
  const UK = countryInfo('UK', '60,461,826', 'Rome');
  const china = countryInfo('china', '800,476,480', 'Tokyo');
  
  console.log(`${US}, ${UK} and ${china}`);