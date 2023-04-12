/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const simplifiedPath = [];
  const dirs = path.split("/");

  for (const dir of dirs) {
    if (dir === "" || dir === ".") continue;
    else if (dir === "..") simplifiedPath.pop();
    else simplifiedPath.push(dir);
  }

  return "/" + simplifiedPath.join("/");
};
