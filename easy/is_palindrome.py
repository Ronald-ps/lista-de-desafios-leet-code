# https://leetcode.com/problems/palindrome-number/
class Solution:
    def isPalindrome(self,x: int) -> bool:
        """ Verifica se um número é igual quando lido na ordem inversa. ex: 123 != 321. """
        algarisms_list = list(str(x))
        return algarisms_list == algarisms_list[::-1]

if __name__ == "__main__":
    num = int(input("insira um inteiro:\t"))
    solution = Solution()
    print(solution.isPalindrome(num))
