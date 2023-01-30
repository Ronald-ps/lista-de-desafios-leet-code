# https://leetcode.com/problems/median-of-two-sorted-arrays/
class Solution:
    def findMedianSortedArrays(self, nums1, nums2) -> float:
        nums = nums1 + nums2
        nums = sorted(nums)
        if len(nums) % 2 == 0:
            j = (len(nums) // 2) - 1  # por que indices começam do 0
            return (nums[j] + nums[j + 1]) / 2

        j = len(nums) // 2
        return nums[j]


if __name__ == "__main__":
    solution = Solution()
    print(solution.findMedianSortedArrays([1, 3], [2, 6]))
