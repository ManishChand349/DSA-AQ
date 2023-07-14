function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return []; 
  }

  const frequencyMap = new Map();

  for (let num of changed) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  changed.sort((a, b) => a - b);

  const original = [];

  for (let [num, freq] of frequencyMap) {
    if (frequencyMap.get(num) > 0) {
      const halfNum = num / 2;
      const halfFreq = frequencyMap.get(halfNum) || 0;

      if (halfFreq > 0) {
        original.push(num);

        frequencyMap.set(num, freq - 1);
        frequencyMap.set(halfNum, halfFreq - 1);
      } else {
        return []; 
      }
    }
  }

  return original;
}

// Example usage
const changed = [1, 3, 4, 2, 6, 8];
const result = findOriginalArray(changed);
console.log(result);