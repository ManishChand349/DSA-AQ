function processBackspaces(str) {
  const stack = [];

  for (const char of str) {
    if (char !== '#') {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.join('');
}

function backspaceCompare(s, t) {
  const processedS = processBackspaces(s);
  const processedT = processBackspaces(t);

  return processedS === processedT;
}

const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t)); 
