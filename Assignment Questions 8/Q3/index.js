function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  
  // Create a 2D array to store the minimum number of steps
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Fill the first row and column with cumulative deletions
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }
  
  // Fill the remaining cells
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        // Characters match, no deletion required
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Characters don't match, find the minimum number of steps
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,  // Delete character from word1
          dp[i][j - 1] + 1   // Delete character from word2
        );
      }
    }
  }
  
  // Return the minimum number of steps
  return dp[m][n];
}

// Example usage
const word1 = "sea";
const word2 = "eat";
const result = minDistance(word1, word2);
console.log(result); // Output: 2
