function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const transposedMatrix = [];
  
    for (let j = 0; j < cols; j++) {
      const row = [];
      for (let i = 0; i < rows; i++) {
        row.push(matrix[i][j]);
      }
      transposedMatrix.push(row);
    }
  
    return transposedMatrix;
  }
  
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  const transposed = transpose(matrix);
  console.log(transposed);
  