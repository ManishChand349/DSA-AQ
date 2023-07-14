function convertTo2DArray(original, m, n) {
  if (original.length !== m * n) {
    return []; // Impossible to construct the desired array
  }

  const result = new Array(m);

  for (let i = 0; i < m; i++) {
    result[i] = new Array(n);

    for (let j = 0; j < n; j++) {
      const index = i * n + j;
      result[i][j] = original[index];
    }
  }

  return result;
}

// Example usage
const original = [1, 2, 3, 4];
const m = 2;
const n = 2;

const result = convertTo2DArray(original, m, n);
console.log(result);
