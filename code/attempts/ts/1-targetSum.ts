// Challenge: Two numbers that add up to a target
// Given an array of numbers and a target, return the indices of the two numbers that add up to the target.

// Example:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] because nums[0] + nums[1] == 9

function targetSum(array: number[], targetNumber: number) {
  const map = new Map()
  for (let i = 0; i < array.length; i++) {
    const complement = targetNumber - array[i]
    if (map.has(complement)) {
      return [map.get(complement)!, i]
    }
    map.set(array[i], i)
  }
  return []
}

console.log(targetSum([1, 2, 4, 6], 7)); // [0, 3]
