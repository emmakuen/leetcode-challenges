// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// --- Examples
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// --- Constraints
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const prerequisitesByCourse = Array.from(Array(numCourses), () => []);

  for (const [course, prerequisite] of prerequisites) {
    prerequisitesByCourse[course].push(prerequisite);
  }

  const visitedCourses = new Set();

  function dfs(course) {
    // if the course has been previously visited, it means there are two courses that have each other as prerequisites (it would create infinite cycle)
    // that would make them impossible to complete, so return false
    if (visitedCourses.has(course)) return false;

    // if the course has no prerequisite, we can complete it, so return true
    if (prerequisitesByCourse[course].length === 0) return true;

    // else, add the course in the visited courses set
    visitedCourses.add(course);

    // and loop over each prerequisite of the current course and run dfs
    for (const prerequisite of prerequisitesByCourse[course]) {
      // if any of dfs calls return false, we can't complete all courses
      // so, return false
      if (!dfs(prerequisite)) return false;
    }

    // if the loop successfully completes, delete the current course from the visited course set
    visitedCourses.delete(course);
    // and mark the course completable by updating its prerequisite list to an empty array
    // this would save us some repeated work
    prerequisitesByCourse[course] = [];

    // and return true, since we can complete this course
    return true;
  }

  // call dfs on each course, and return false if any of them returns false
  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) return false;
  }

  return true;
};
