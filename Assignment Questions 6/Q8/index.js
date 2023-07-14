function multiply(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;

  const result = new Array(m);
  for (let i = 0; i < m; i++) {
    result[i] = new Array(n).fill(0);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let t = 0; t < k; t++) {
        sum += mat1[i][t] * mat2[t][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

const mat1 = [[1, 0, 0], [-1, 0, 3]];
const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
const result = multiply(mat1, mat2);
console.log(result);