// We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence.
// This means that the object with sequence number 3 was created just before the object with sequence number 4. Write a function to sort the objects in-place on their creation sequence number in O(n)
//  and without using any extra space. For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.

// Examples
// Input: [3, 1, 5, 4, 2]
// Output: [1, 2, 3, 4, 5]
// Input: [2, 6, 4, 3, 1, 5]
// Output: [1, 2, 3, 4, 5, 6]

const cyclicSort = (nums) => {
  let index = 0;

  // loop through each number in nums array
  while (index < nums.length) {
    // num is the number at the current index
    // numIndex is the correct index the number is supposed to be in (array index starts from 0 while nums array numbers start from 1. Therefore, we have to subtract 1 to get the correct index for the current number.)
    const num = nums[index];
    const numIndex = num - 1;

    // if the current number is not at its correct index, numIndex would not equal to index.
    if (numIndex !== index) {
      // in that case, switch the current number with the number at its correct index.
      [nums[numIndex], nums[index]] = [nums[index], nums[numIndex]];
    } else {
      // if the current number is at its correct index, move to the next index
      index++;
    }
  }

  // return the sorted list
  return nums;
};
