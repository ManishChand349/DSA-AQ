function singleNumber(nums) {
    let result = 0;
    
    for (const num of nums) {
        result ^= num;
    }
    
    return result;
}

const nums = [2, 2, 1];
const result = singleNumber(nums);
console.log(result);  