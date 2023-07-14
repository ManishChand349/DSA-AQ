function sortedSquares(nums) {
  const squaredArr = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    squaredArr.push(num * num);
  }

  squaredArr.sort((a, b) => a - b);

  return squaredArr;
}

const nums = [-4, -1, 0, 3, 10];
const result = sortedSquares(nums);
console.log(result);