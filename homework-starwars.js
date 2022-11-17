const films = require('./sw-films.json');
const planets = require('./sw-planets.json');
const people = require('./sw-people.json');
const starships = require('./sw-starships.json');

// count sum of all starships cost from episodes 4-6
console.log(
  'Sum of all starships cost from episodes 4 - 6 is: ' +
    sumAllStarshipsCostFromEpisodes(4, 6)
);

function sumAllStarshipsCostFromEpisodes(startEp, endEp) {
  let sum = 0;
  //keys for all episodes
  let episode = []; // 4 5 6
  for(let i = startEp; i <= endEp; i++){
    episode.push(i)
  }
  let starshipInEpisode = [];
  for(let i = 0; i < episode.length; i++){
    films.filter((currEpisode) => {
      if(currEpisode.episode_id === episode[i]){
        starshipInEpisode.push(currEpisode.starships)
      }
    })
  }
  // console.log(starshipInEpisode)
  // merging arrays to get duplicates
  const mergeArray = starshipInEpisode.flat(1);
  const deleteDuplicatesArray = [...new Set(mergeArray)] // delete duplicates
  // console.log(deleteDuplicatesArray)
  // maybe I should delete old array to clean up, but idk how to do this
  // counting money 1001410609998
  starships.forEach((element) => {
    deleteDuplicatesArray.forEach((arrayElement) => {
      if(element.url === arrayElement && element.cost_in_credits !== "unknown"){
        sum += parseInt(element.cost_in_credits)
      }
    })
  })
  return sum;
}
sumAllStarshipsCostFromEpisodes(4, 6)

// find the fastest starship you can afford having 8500000 credits

console.log(
  'Fastest ship I can get for up to 8500000 is: ' +
    getFastestShipFor(8500000).name
);
// TO DO!!!!!!!!!!!!!!!!!
function getFastestShipFor(money) {
  let ship = [];
  const result = starships.filter((element) => element.cost_in_credits <= money)
                          .sort((a, b) => a.max_atmosphering_speed - b.max_atmosphering_speed)
  ship = result.at(-1)
  // TO DO! There is two ships at the same max speed - J-type diplomatic barge
  return ship; 
}
// find planet name with the lowest difference between the rotation period and orbital period

// console.log(
//   'Planet name with the lowest difference between the rotation period and orbital period is: ' +
//     getPlanetNameWithLowestDifference('rotation_period', 'orbital_period')
// );

function getPlanetNameWithLowestDifference(key1, key2) {
  let planetName;
  return planetName;
}

// map all starships with crew <= 4 that were created between 10 dec 2014 and 15 dec 2014

console.log(
  'Ships with max crew of 4 created between 10.12.2014 - 12.12.2014 number is: ' +
    getCrewShipFrom(4, new Date(2014, 11, 10), new Date(2014, 11, 15)).length
);

function getCrewShipFrom(maxCrew, dateStart, dateEnd) {
  let ship = [];
  let d = new Date();
  const startMs = dateStart.getTime();
  const endMs = dateEnd.getTime();
  let crew4 = [];
  //console.log(startMs)

  const result = starships.map((currentShip) => {
    if(currentShip.crew <= maxCrew){
      crew4.push(currentShip)
    }
  })
  const x = crew4.forEach((element) => {
    if(Date.parse(element.created) > startMs && Date.parse(element.created) < endMs){
      ship.push(element)
    }
  })
  return ship;

}
// create an array of people’s names from episodes 1 and 5 sorted by the diameter of origin planet low to high

// console.log(
//   'People from ep 1 - 5 sorted by origin planet diameter low to high: ' +
//     getPeopleSortedByOriginPlanetDiameter(1, 5)
// );

function getPeopleSortedByOriginPlanetDiameter(startEp, endEp) {
  let people = [];
  const result = people.map((currentPeople) => {
    const result2 = planets.map((currentMap) => {
      if(currentPeople.homeworld === currentMap.url){
        people.push(currentPeople)
      }
    })
  })
  console.log(people)
  return people;
}