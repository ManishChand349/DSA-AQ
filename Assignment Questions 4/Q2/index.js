function findDisjointIntegers(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const distinctInNums1 = nums1.filter(num => !set2.has(num));
  const distinctInNums2 = nums2.filter(num => !set1.has(num));

  return [distinctInNums1, distinctInNums2];
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const result = findDisjointIntegers(nums1, nums2);
console.log(result); 
