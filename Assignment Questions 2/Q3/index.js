let findLHS = function(nums) {
    const countMap = new Map();
    let maxLength = 0;

    for (let num of nums) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }

    for (let [num, count] of countMap) {
        if (countMap.has(num + 1)) {
            maxLength = Math.max(maxLength, count + countMap.get(num + 1));
        }
    }

    return maxLength;
};

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const result = findLHS(nums);

console.log(result);
