// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;

  let longestSubstring = '', substringInTest = ''

  for (let i = 0; i < s.length; i++) {
    if (!substringInTest.includes(s[i])) {
      substringInTest += s[i]
    }
    else {
      const index = substringInTest.lastIndexOf(s[i]) + 1
      substringInTest = substringInTest.substring(index) + s[i]
    }
    longestSubstring = substringInTest.length > longestSubstring.length ? substringInTest : longestSubstring
  }

  return longestSubstring.length
};

// console.log("result->\t",lengthOfLongestSubstring("dvdf"))
