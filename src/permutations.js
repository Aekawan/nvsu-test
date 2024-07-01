function permutations(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }
  if (str.length <= 1) return [str];
  
  const allPermutations = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingStr = str.slice(0, i) + str.slice(i + 1);
    const remainingPermutations = permutations(remainingStr);
    for (const permutation of remainingPermutations) {
      allPermutations.add(char + permutation);
    }
  }

  return Array.from(allPermutations);
}

module.exports = permutations;