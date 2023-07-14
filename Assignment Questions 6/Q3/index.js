function validMountainArray(arr) {
  const n = arr.length;
  if (n < 3) {
    return false;
  }

  let left = 0;
  let right = n - 1;

  while (left < right) {
    if (arr[left] < arr[left + 1]) {
      left++;
    } else if (arr[right] < arr[right - 1]) {
      right--;
    } else {
      break;
    }
  }

  if (left === 0 || right === n - 1) {
    return false;
  }

  if (left !== right || left === 0 || right === n - 1) {
    return false;
  }

  return true;
}

const arr = [2, 1];
const isValidMountain = validMountainArray(arr);
console.log(isValidMountain);