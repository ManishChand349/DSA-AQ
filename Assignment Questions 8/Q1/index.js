function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  
  // Create a 2D array to store the minimum ASCII sum
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
  
  // Fill the first row and column with cumulative ASCII sum
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }
  
  // Fill the remaining cells
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        // Characters match, no deletion required
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Characters don't match, find the minimum deletion sum
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1), // Delete character from s1
          dp[i][j - 1] + s2.charCodeAt(j - 1)  // Delete character from s2
        );
      }
    }
  }
  
  return dp[m][n];
}

// Example usage
const s1 = "sea";
const s2 = "eat";
const result = minimumDeleteSum(s1, s2);
console.log(result); // Output: 231
