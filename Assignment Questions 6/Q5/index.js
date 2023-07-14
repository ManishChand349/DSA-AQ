function minProductSum(nums1, nums2) {
  const n = nums1.length;
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  let minProductSum = 0;

  while (left <= right) {
    minProductSum += nums1[left] * nums2[right];
    left++;
    right--;
  }

  return minProductSum;
}

const nums1 = [5, 3, 4, 2];
const nums2 = [4, 2, 2, 5];
const result = minProductSum(nums1, nums2);
console.log(result);
