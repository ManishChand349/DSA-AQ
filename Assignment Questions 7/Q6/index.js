function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false; 
  }

  const concatenated = s + s;

  if (concatenated.includes(goal)) {
    return true; 
  }

  return false; 
}

// Example usage:
const s = "abcde";
const goal = "cdeab";
console.log(rotateString(s, goal)); 
