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
//   if (n <= 3) return n;

//   const ways = [0, 1, 2, 3];

//   for (let i = 4; i <= n; i++) {
//     ways.push(ways[i - 1] + ways[i - 2]);
//   }

//   return ways[n];
// };

// Solution time complexity is O(n) as the code loops n times
// Solution space complexity is O(n) because ways array has the size of n

// -------- Second Solution
const climbStairs = (n) => {
  // if steps are less than three, number of ways to climb them would be equal to the step count
  if (n <= 3) return n;

  // else, initialize two pointers to keep track of the previous steps
  // one step --> one way of climbing
  // two step --> two ways of climbing
  // three or more steps would have a number of climbing that's equal to their previous two steps
  // e.g. third = first + second
  let first = 1;
  let second = 2;

  // start loop from the third step as first two steps are given
  for (let i = 3; i <= n; i++) {
    // add previous two steps to find the number of distinct way to climb the current (i) number of stairs
    const third = first + second;
    // shift the pointers each by one step to keep track of the last two steps
    first = second;
    second = third;

    // repeat the loop to find how many distinct ways we can climb n number of stairs
  }

  return second;
};
