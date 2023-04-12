/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const simplifiedPath = [];
  const dirs = path.split("/");

  for (const dir of dirs) {
    if (dir === "" || dir === ".") continue;
    dir === ".." ? simplifiedPath.pop() : simplifiedPath.push(dir);
  }

  return "/" + simplifiedPath.join("/");
};
