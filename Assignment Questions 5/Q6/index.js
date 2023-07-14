function findDuplicates(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);

    if (nums[num - 1] > 0) {
      nums[num - 1] *= -1;
    } else {
      result.push(num);
    }
  }

  return result;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const result = findDuplicates(nums);
console.log(result);
