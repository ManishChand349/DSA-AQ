class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function str2tree(s) {
  if (!s || s.length === 0) {
    return null;
  }

  let stack = [];
  let num = '';
  let root = null;

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (char === '(') {
      // Create a new node with the parsed integer and push it to the stack
      let newNode = new TreeNode(parseInt(num));
      stack.push(newNode);

      // Reset the number string
      num = '';
    } else if (char === ')') {
      // Connect the current node to its parent
      let parentNode = stack.pop();

      if (parentNode.right) {
        // If the parent already has a right child, connect the current node as the left child
        parentNode.left = stack[stack.length - 1];
      } else {
        // Otherwise, connect the current node as the right child
        parentNode.right = stack[stack.length - 1];
      }
    } else {
      // Build the number string
      num += char;

      // Check if the next character is not a digit or the end of string
      if (isNaN(parseInt(s.charAt(i + 1))) || i === s.length - 1) {
        // Create a new node with the parsed integer and push it to the stack
        let newNode = new TreeNode(parseInt(num));
        stack.push(newNode);

        // Reset the number string
        num = '';
      }
    }
  }

  // The last node in the stack is the root of the binary tree
  return stack.pop();
}

// Function to traverse the binary tree in pre-order and return an array of values
function traversePreOrder(root) {
  if (!root) {
    return [];
  }

  let result = [];
  result.push(root.val);
  result = result.concat(traversePreOrder(root.left));
  result = result.concat(traversePreOrder(root.right));

  return result;
}

// Example usage
const s = "4(2(3)(1))(6(5))";
const tree = str2tree(s);
const result = traversePreOrder(tree);
console.log(result); 
