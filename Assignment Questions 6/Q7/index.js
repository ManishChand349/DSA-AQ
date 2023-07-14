function generateMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  let num = 1;

  while (num <= n * n) {
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = num;
      num++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = num;
      num++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = num;
      num++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = num;
      num++;
    }
    colStart++;
  }

  return matrix;
}

const n = 3;
const matrix = generateMatrix(n);
console.log(matrix);