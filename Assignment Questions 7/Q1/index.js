function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false; // Different lengths, can't be isomorphic
  }

  const mapping = {};
  const mappedChars = new Set();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapping[charS]) {
      if (mapping[charS] !== charT) {
        return false; 
      }
    } else {
      if (mappedChars.has(charT)) {
        return false; 
      }

      mapping[charS] = charT;
      mappedChars.add(charT);
    }
  }

  return true; 
}

const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t)); 
