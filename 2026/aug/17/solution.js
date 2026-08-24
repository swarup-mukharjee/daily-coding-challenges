function findTarget(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return "Target not found";
}

// call or test
console.log(findTarget([2, 7, 11, 15], 9));