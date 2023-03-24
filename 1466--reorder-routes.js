var minReorder = function (n, connections) {
  // Create an object to store the neighbors of each city
  let neighbors = {};
  // Create an array to keep track of which cities can reach city 0
  const isZeroReachable = Array(n).fill(false);
  // City 0 can reach itself
  isZeroReachable[0] = true;

  // Initialize an empty array for each city in neighbors
  for (let city = 0; city < n; city++) neighbors[city] = [];

  for (const [sourceCity, destinationCity] of connections) {
    // Add the destination city to the array for the source city with the boolean value false
    neighbors[sourceCity].push([destinationCity, false]);
    // Add the source city to the array for the destination city with the boolean value true
    neighbors[destinationCity].push([sourceCity, true]);
  }

  // Initialize the reorder count to 0 and call traverseCities with city 0
  let reorderCount = 0;
  traverseCities(0);

  // Return the reorder count
  return reorderCount;

  /**
   * @param {number} zeroReachableCity - city that can reach city 0
   */
  function traverseCities(zeroReachableCity) {
    // Iterate over each neighbor of zeroReachableCity
    for (const [neighborCity, isSourceCity] of neighbors[zeroReachableCity]) {
      // If the neighbor is already reachable, continue to the next neighbor
      if (isZeroReachable[neighborCity]) continue;
      // If the connection is outgoing, increment reorderCount
      if (!isSourceCity) reorderCount++;
      // Mark the neighbor as reachable
      isZeroReachable[neighborCity] = true;
      // Recursively call traverseCities with the neighbor city as the new zeroReachableCity
      traverseCities(neighborCity);
    }
  }
};
