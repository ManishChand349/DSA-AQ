function reverseStr(s, k) {
  const n = s.length;
  const arr = s.split('');

  for (let i = 0; i < n; i += 2 * k) {
    let left = i;
    let right = Math.min(i + k - 1, n - 1);

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join('');
}

// Example usage:
const s = "abcdefg";
const k = 2;
console.log(reverseStr(s, k)); // Output: "bacdfeg"
