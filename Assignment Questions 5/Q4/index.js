function findDisappearedNumbers(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const answer = [[], []];

  for (let num of nums1) {
    if (!set2.has(num)) {
      answer[0].push(num);
    }
  }

  for (let num of nums2) {
    if (!set1.has(num)) {
      answer[1].push(num);
    }
  }

  return answer;
}

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
const result = findDisappearedNumbers(nums1, nums2);
console.log(result);
