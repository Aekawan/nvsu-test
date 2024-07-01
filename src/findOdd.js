function findOdd(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  const count = {};

  arr.forEach(num => {
    count[num] = (count[num] || 0) + 1;
  });

  for (const num in count) {
    if (count[num] % 2 !== 0) {
      return parseInt(num);
    }
  }

  throw new Error('No integer appears an odd number of times');
}

module.exports = findOdd;