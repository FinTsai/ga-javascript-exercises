// Random Address Generator
//
// Write a script that can generate random addresses
// As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
// Your script should randomly select one item from each of these arrays and then use them to construct a random address
//
// Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
// `node random-address.js`
// `=> 34578 Dolphin Street, Wonka NY, 44506`
// `${streetNum} ${streetName}, ${St }`

const streetNumberMax = 20;
const streetNumberMin = 1;
const streetNameList = ['George', 'TownHall', 'Central', 'Pitt'];
const cityNameList = ['Ultimo', 'Sydney', 'Taipei', 'Chatswood'];
const stateNameList = ['VIC', 'NSW', 'QLD', 'TAS', 'SA', 'WA'];
const zipCodeList = ['2007', '2000', '3000', '1250', '9487'];

const streetNumber = getRandomStreetNumber();
const streetName = getRandomItemFromList(streetNameList);
const cityName = getRandomItemFromList(cityNameList);
const stateName = getRandomItemFromList(stateNameList);
const zipCode = getRandomItemFromList(zipCodeList);

let randomAddress = `${streetNumber} ${streetName} Street, ${cityName} ${stateName}, ${zipCode}`;

console.log(randomAddress);

function getRandomStreetNumber() {
  return Math.floor(Math.random() * (streetNumberMax - streetNumberMin)) + streetNumberMin;
}

function getRandomItemFromList(list) {
  let index = Math.floor(Math.random() * list.length);
  return list[index];
}
