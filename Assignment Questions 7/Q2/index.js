function isStrobogrammatic(num) {
  const pairs = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6',
  };

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const digitLeft = num[left];
    const digitRight = num[right];

    if (!pairs.hasOwnProperty(digitLeft) || pairs[digitLeft] !== digitRight) {
      return false; 
    }

    left++;
    right--;
  }

  return true; 
}

const num = "69";
console.log(isStrobogrammatic(num)); 
