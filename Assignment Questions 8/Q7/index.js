function decodeString(s) {
  const stack = [];
  
  for (let char of s) {
    if (char !== ']') {
      // Push the character to the stack
      stack.push(char);
    } else {
      // Pop characters until '[' is found
      let curr = '';
      while (stack.length > 0 && stack[stack.length - 1] !== '[') {
        curr = stack.pop() + curr;
      }
      stack.pop(); // Pop the '[' character
      
      // Pop numbers until a non-digit character is found
      let num = '';
      while (stack.length > 0 && !isNaN(parseInt(stack[stack.length - 1]))) {
        num = stack.pop() + num;
      }
      const count = parseInt(num);
      
      // Repeat the current string 'count' times and push it back to the stack
      stack.push(curr.repeat(count));
    }
  }
  
  // Concatenate all the strings in the stack to get the decoded string
  return stack.join('');
}

// Example usage
const s = "3[a]2[bc]";
const result = decodeString(s);
console.log(result); // Output: "aaabcbc"
