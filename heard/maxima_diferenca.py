# https://leetcode.com/problems/maximum-gap/description/

class Solution:
    def maximumGap(self, nums: list) -> int:
        nums = sorted(nums)

        counter = 0
        maior_diferenca = 0
        for num in nums:
            if counter == 0:
                counter += 1
                continue
            dif = num - nums[counter - 1]
            if dif > maior_diferenca:
                maior_diferenca = dif
            counter+=1
        return maior_diferenca

solution = Solution()
solution.maximumGap([3,6,9,1])
