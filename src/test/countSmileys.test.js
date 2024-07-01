const countSmileys = require('../countSmileys');

describe('Count the smiley faces', () => {
  test('should count the number of smiley faces', () => {
    expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2);
    expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3);
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1);
    expect(countSmileys([])).toBe(0);
  });

  test('should throw an error for non-array inputs', () => {
    expect(() => countSmileys(123)).toThrow(TypeError);
    expect(() => countSmileys(null)).toThrow(TypeError);
    expect(() => countSmileys({})).toThrow(TypeError);
  });
});