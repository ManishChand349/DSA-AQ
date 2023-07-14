function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (let i = 0; i < ops.length; i++) {
      minRow = Math.min(minRow, ops[i][0]);
      minCol = Math.min(minCol, ops[i][1]);
    }
  
    return minRow * minCol;
  }
  
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const maxIntegers = maxCount(m, n, ops);
  console.log(maxIntegers); 