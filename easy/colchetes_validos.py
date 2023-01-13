# https://leetcode.com/problems/valid-parentheses/description/

class Solution:
    def isValid(self, s: str) -> bool:
        caracteresCorrespondencia = {"(":")", "{" : "}", "[": "]"}

        for abertura in caracteresCorrespondencia.keys():
            fechamento = caracteresCorrespondencia[abertura]
            if s.count(abertura) != s.count(fechamento):
                return False

        listaParaSerFechado = []
        for c in s:
            if c in caracteresCorrespondencia.keys():
                listaParaSerFechado.append(c)
            elif listaParaSerFechado and c == caracteresCorrespondencia[listaParaSerFechado[-1]]:
                listaParaSerFechado.pop()

        return len(listaParaSerFechado) == 0


if __name__ == "__main__":
  solution  = Solution()
  print(solution.isValid("()"))
