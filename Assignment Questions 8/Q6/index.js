function findAnagrams(s, p) {
  const result = [];
  
  // Create frequency maps for string p and a sliding window in string s
  const pFreqMap = new Map();
  const windowFreqMap = new Map();
  
  for (let char of p) {
    pFreqMap.set(char, (pFreqMap.get(char) || 0) + 1);
  }
  
  let left = 0;
  let right = 0;
  
  while (right < s.length) {
    const char = s[right];
    
    // Expand the window
    windowFreqMap.set(char, (windowFreqMap.get(char) || 0) + 1);
    
    // Shrink the window if its size is greater than p's length
    if (right - left + 1 > p.length) {
      const leftChar = s[left];
      if (windowFreqMap.get(leftChar) === 1) {
        windowFreqMap.delete(leftChar);
      } else {
        windowFreqMap.set(leftChar, windowFreqMap.get(leftChar) - 1);
      }
      left++;
    }
    
    // Compare the frequency maps of p and the current window
    if (right - left + 1 === p.length && compareFreqMaps(pFreqMap, windowFreqMap)) {
      result.push(left);
    }
    
    right++;
  }
  
  return result;
}

function compareFreqMaps(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  
  for (let [key, val] of map1) {
    if (val !== map2.get(key)) {
      return false;
    }
  }
  
  return true;
}

// Example usage
const s = "cbaebabacd";
const p = "abc";
const result = findAnagrams(s, p);
console.log(result);
