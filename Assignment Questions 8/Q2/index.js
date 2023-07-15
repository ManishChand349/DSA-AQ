function isValid(s) {
  const stack = [];
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const char = s.charAt(i);
    
    if (char === '(' || char === '*') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        let foundMatch = false;
        for (let j = i - 1; j >= 0; j--) {
          if (s.charAt(j) === '(') {
            foundMatch = true;
            s = s.substring(0, j) + ' ' + s.substring(j + 1);
            break;
          } else if (s.charAt(j) === '*') {
            foundMatch = true;
            s = s.substring(0, j) + ' ' + s.substring(j + 1);
            break;
          }
        }
        if (!foundMatch) {
          return false;
        }
      }
    }
  }
  
  while (stack.length > 0) {
    const char = stack.pop();
    if (char !== '*') {
      return false;
    }
  }
  
  return true;
}

const s = "()";
const result = isValid(s);
console.log(result); // Output: true
