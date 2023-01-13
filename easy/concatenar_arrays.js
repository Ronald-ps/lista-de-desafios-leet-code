// https://leetcode.com/problems/concatenation-of-array/submissions/877698696/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
  nums = nums.concat(nums)
  return nums
};
