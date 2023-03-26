/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function (edges) {
  let isVisited = Array(edges.length).fill(false);
  let maxLength = -1;

  for (let i = 0; i < edges.length; i++) {
    if (isVisited[i]) continue;

    const indexFor = {};
    for (let node = i, index = 0; node !== -1; node = edges[node]) {
      if (node in indexFor) {
        maxLength = Math.max(maxLength, index - indexFor[node]);
        break;
      }

      if (isVisited[node]) break;

      isVisited[node] = true;
      indexFor[node] = index;
      index++;
    }
  }

  return maxLength;
};
