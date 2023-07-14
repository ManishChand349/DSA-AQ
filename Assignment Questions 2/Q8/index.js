let smallestRangeI = function(nums, k) {
    const maxNum = Math.max(...nums);
    const minNum = Math.min(...nums);
    const diff = maxNum - minNum;
    
    if (diff <= 2 * k) {
        return 0;
    }
    
    return diff - 2 * k;
};

const nums = [1];
const k = 0;
const result = smallestRangeI(nums, k);

console.log(result); 