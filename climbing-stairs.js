// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// ------- Examples
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// ------ Constraints
// 1 <= n <= 45

// -------- First Solution
// const climbStairs = (n) => {
//   // start from the top of the stairs
//   // from the top stair, there's only one way of moving forward (taking no step)
//   let first = 1;
//   // from its previous stair (second from top), there's only one way of going up (taking 1 step)
//   let second = 1;

//   // the remainder of steps can be divided into subproblems
//   // so, they're equal to the sum of the number of ways available for climbing their previous two stairs
//   for (let i = 0; i < n - 1; i++) {
//     const third = first + second;
//     first = second;
//     second = third;
//   }

//   return second;
// };

// Solution time complexity is O(n) as the code loops n times
// Solution space complexity is O(n) because ways array has the size of n

// -------- Second Solution
const climbStairs = (n) => {
  // if steps are less than three, number of ways to climb them would be equal to the step count
  if (n <= 3) return n;

  // else, initialize two pointers to keep track of the previous steps
  // one step --> one way of climbing [1]
  // two step --> two ways of climbing ([1, 1], [2])
  // three steps can be divided into two subproblems ==> ways to climb 1 step + ways to climb remaining 2 steps
  // e.g. third = first + second ([1, 1, 1], [1, 2], [2, 1])
  let first = 1;
  let second = 2;

  // start loop from the third step as the first two steps are given
  for (let i = 3; i <= n; i++) {
    // add the number of ways to climb its previous two steps in order to find the number of distinct way to climb the current (i) number of stairs
    const third = first + second;
    // shift the pointers each by one to keep track of the previous two steps
    first = second;
    second = third;

    // repeat the loop to find how many distinct ways we can climb n number of stairs
  }

  return second;
};
