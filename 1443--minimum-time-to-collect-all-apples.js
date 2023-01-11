/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const adjacencyList = Array.from(Array(n), () => []);

  for (const edge of edges) {
    adjacencyList[edge[0]].push(edge[1]);
    adjacencyList[edge[1]].push(edge[0]);
  }

  function dfs(parent, node) {
    let time = 0;

    for (const child of adjacencyList[node]) {
      if (child === parent) continue;

      const childTime = dfs(node, child);

      if (childTime > 0 || hasApple[child]) {
        time += childTime + 2;
      }
    }

    return time;
  }

  return dfs(-1, 0);
};
