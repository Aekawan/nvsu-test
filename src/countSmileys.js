function countSmileys(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array');
  }

  const smileyPattern = /^[:;][-~]?[)D]$/;
  return arr.filter(face => smileyPattern.test(face)).length;
}

module.exports = countSmileys;