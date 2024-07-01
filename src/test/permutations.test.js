const permutations = require('../permutations');

describe('Permutations', () => {
  test('should return all permutations of a given string', () => {
    expect(permutations('a')).toEqual(['a']);
    expect(permutations('ab')).toEqual(expect.arrayContaining(['ab', 'ba']));
    expect(permutations('abc')).toEqual(expect.arrayContaining(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
    expect(permutations('aabb')).toEqual(expect.arrayContaining(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']));
  });

  test('should throw an error for non-string inputs', () => {
    expect(() => permutations(123)).toThrow(TypeError);
    expect(() => permutations(null)).toThrow(TypeError);
    expect(() => permutations({})).toThrow(TypeError);
  });
});