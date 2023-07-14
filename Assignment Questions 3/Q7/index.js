function findMissingRanges(nums, lower, upper) {
    const result = [];
    let start = lower;
    
    for (const num of nums) {
        if (num > start) {
            result.push(getRange(start, num - 1));
        }
        start = num + 1;
    }
    
    if (start <= upper) {
        result.push(getRange(start, upper));
    }
    
    return result;
}

function getRange(start, end) {
    if (start === end) {
        return `${start}`;
    } else {
        return `${start}->${end}`;
    }
}

const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
const result = findMissingRanges(nums, lower, upper);
console.log(result);
