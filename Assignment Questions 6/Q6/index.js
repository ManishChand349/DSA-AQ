function findOriginalArray(changed) {
  const sorted = changed.slice().sort((a, b) => a - b);
  const original = [];
  const counts = new Map();

  for (const num of sorted) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  for (const num of sorted) {
    if (counts.get(num) > 0) {
      counts.set(num, counts.get(num) - 1);
    } else if (num % 2 === 0 && counts.get(num / 2) > 0) {
      counts.set(num / 2, counts.get(num / 2) - 1);
    } else {
      return [];
    }

    original.push(num);
  }

  return original;
}

const changed = [1, 3, 4, 2, 6, 8];
const original = findOriginalArray(changed);
console.log(original);
