'use strict';

function getEdges(graph, cities) {
  // console.log(graph, cities);
  let cost = 0;
  let found = false;
  //fail first if graph is empty or cities array is empty
  if (!graph || !cities) return [false, cost];

  for (let i = 1; i < cities.length; i++) {
    let startingCity = cities[i - 1];
    let currentCity = cities[i];
    for (const [key, value] of graph.adjacencyList.entries()) {
      if (key.value === startingCity) {
        // console.log('found the first city!');
        //check the values array for the current City
        for (let j = 0; j < value.length; j++) {
          // console.log(value[j]);
          if (value[j].vertex.value === currentCity) {
            // console.log('found the second city!');
            cost += value[j].weight;
            found = true;
            break;
          } else if (j === value.length - 1) {
            return [false, 0];
          }
        }
      }

      // console.log(key);
    }
  }
  return [found, cost];
}

module.exports = getEdges;
