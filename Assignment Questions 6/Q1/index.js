function reconstructPermutation(s) {
  const n = s.length;
  let low = 0;
  let high = n;
  const perm = [];

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      perm.push(low);
      low++;
    } else if (s[i] === 'D') {
      perm.push(high);
      high--;
    }
  }

  perm.push(low); 
  return perm;
}

const s = "IDID";
const permutation = reconstructPermutation(s);
console.log(permutation);
