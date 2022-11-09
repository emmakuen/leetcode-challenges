// There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
// A province is a group of directly or indirectly connected cities and no other cities outside of the group.
// You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
// Return the total number of provinces.

// --- Examples
// Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
// Output: 2
// Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
// Output: 3

// --- Constraints
// 1 <= n <= 200
// n == isConnected.length
// n == isConnected[i].length
// isConnected[i][j] is 1 or 0.
// isConnected[i][i] == 1
// isConnected[i][j] == isConnected[j][i]

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  const numberOfCities = isConnected.length;
  // consider each city as a separate province in the beginning (we'll reduce this number later if unite connected cities)
  let numberOfProvinces = numberOfCities;
  // assign each city the hierarchy of 1
  const cityHierarchyOf = Array(numberOfCities).fill(1);

  // make an array to track connected cities
  // consider cities with more connections than others a parent and keep track of the number of connections they have
  const parentCityOf = Array(numberOfCities);
  // make each city parent of itself initially
  for (let city = 0; city < numberOfCities; city++) {
    parentCityOf[city] = city;
  }

  function findParentCityOf(city) {
    // while the city is not its own parent, look for the root city (the one with the most connections) it's pointing to
    while (city !== parentCityOf[city]) {
      parentCityOf[city] = parentCityOf[parentCityOf[city]];
      city = parentCityOf[city];
    }

    // return the root city
    return city;
  }

  function unionCities(city1, city2) {
    const parentCity1 = findParentCityOf(city1);
    const parentCity2 = findParentCityOf(city2);

    // if both cities have the same parent, exit the function
    if (parentCity1 === parentCity2) {
      return;
    }

    // else, find which parent city has a higher hierarchy and make it the parent of the other one
    // also, add the hierarchy of the parent city with a lesser hierarchy to the other one's hierarchy
    if (cityHierarchyOf[parentCity2] > cityHierarchyOf[parentCity1]) {
      parentCityOf[parentCity1] = parentCity2;
      cityHierarchyOf[parentCity2] += cityHierarchyOf[parentCity1];
    } else {
      parentCityOf[parentCity2] = parentCity1;
      cityHierarchyOf[parentCity1] += cityHierarchyOf[parentCity2];
    }

    // reduce the number of province by one since we joined two cities into one province
    numberOfProvinces--;
    return;
  }

  for (let city1 = 0; city1 < numberOfCities; city1++) {
    for (let city2 = 0; city2 < numberOfCities; city2++) {
      if (city1 !== city2 && isConnected[city1][city2] === 1) {
        unionCities(city1, city2);
      }
    }
  }

  return numberOfProvinces;
};
