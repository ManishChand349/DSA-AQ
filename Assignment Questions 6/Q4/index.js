function findMaxLength(nums) {
  const n = nums.length;
  let maxLen = 0;
  let count = 0;
  const counts = new Map();
  counts.set(0, -1);

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count--;
    }

    if (counts.has(count)) {
      maxLen = Math.max(maxLen, i - counts.get(count));
    } else {
      counts.set(count, i);
    }
  }

  return maxLen;
}

const nums = [0, 1];
const maxLength = findMaxLength(nums);
console.log(maxLength);
