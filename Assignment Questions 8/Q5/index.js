function compress(chars) {
  let writeIndex = 0; // Pointer for writing compressed characters
  let count = 1; // Count of consecutive repeating characters

  for (let i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) {
      count++;
    } else {

      chars[writeIndex] = chars[i - 1];
      writeIndex++;

      if (count > 1) {
        const countChars = count.toString().split('');
        for (let j = 0; j < countChars.length; j++) {
          chars[writeIndex] = countChars[j];
          writeIndex++;
        }
      }

      count = 1;
    }
  }

  return writeIndex;
}

// Example usage
const chars = ["a","a","b","b","c","c","c"];
const newLength = compress(chars);
const compressedChars = chars.slice(0, newLength);
console.log(newLength); 
console.log(compressedChars); 
