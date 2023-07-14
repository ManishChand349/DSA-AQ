function arrangeCoins(n) {
    let k = 0;
  
    while (n >= k) {
      n -= k;
      k++;
    }
  
    return k - 1;
  }
  
  const n = 5;
  const completeRows = arrangeCoins(n);
  console.log(completeRows); 