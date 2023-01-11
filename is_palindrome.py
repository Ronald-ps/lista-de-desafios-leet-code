# https://leetcode.com/problems/palindro
def is_palindrome(x: int) -> bool:
    """ Verifica se um número é igual quando lido na ordem inversa. ex: 123 != 321. """
    algarisms_list = list(str(x))
    return algarisms_list == algarisms_list[::-1]

if __name__ == "__main__":
    num = int(input("insira um inteiro:\t"))
    print(is_palindrome(num))
