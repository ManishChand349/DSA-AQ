function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    // Check if there are at least two same characters in s
    const charCount = new Map();
    for (let char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
      if (charCount.get(char) >= 2) {
        return true;
      }
    }
    return false;
  }

  let first = -1; // Index of the first mismatched character
  let second = -1; // Index of the second mismatched character

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== goal.charAt(i)) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        // There are more than two mismatched characters
        return false;
      }
    }
  }

  // Check if two mismatched characters can be swapped to make the strings equal
  return (
    second !== -1 &&
    s.charAt(first) === goal.charAt(second) &&
    s.charAt(second) === goal.charAt(first)
  );
}

// Example usage
const s = "ab";
const goal = "ba";
const result = buddyStrings(s, goal);
console.log(result); // Output: true
