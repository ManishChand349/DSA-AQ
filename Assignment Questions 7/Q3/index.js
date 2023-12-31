function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let sum = '';

  while (i >= 0 || j >= 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    const currentSum = digit1 + digit2 + carry;
    carry = Math.floor(currentSum / 10);
    sum += (currentSum % 10).toString();

    i--;
    j--;
  }

  if (carry > 0) {
    sum += carry.toString();
  }

  return sum.split('').reverse().join('');
}

// Example usage:
const num1 = "11";
const num2 = "123";
console.log(addStrings(num1, num2));
