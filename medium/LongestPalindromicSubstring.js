
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 1) {
    return s
  }

  const armazenaCaracteresQueSeRepetem = (string_) => {
    let caracteresQueSeRepetem = {}
    for (const i in string_) {
      const char = string_[i]
      const regex = new RegExp(char, "g");
      ocorrencias = (s.match(regex) || []).length
      if (ocorrencias > 1) {
        if (!caracteresQueSeRepetem[char]) caracteresQueSeRepetem[char] = [i]
        else {
         caracteresQueSeRepetem[char].push(i)
        }
      }
    }
    return caracteresQueSeRepetem
  }

  const verificaSeEhPalindrome = (subString) => {
    const metadeDaString = Math.floor(subString.length / 2)
    for (let i = 0; i < metadeDaString; i ++) {
      if (subString[i] !== subString[subString.length - 1 - i]) return false
    }
    return true
  }

  const pegaPalindromos = (string_, listaDeIndices) => {
    let palindromos = []
    for (const j in listaDeIndices) {
      const indice = listaDeIndices[j]

      for (let i = listaDeIndices.length - 1; i > 0; i--){

        if (indice == listaDeIndices[i]) continue

        const fim = parseInt(listaDeIndices[i]) + 1
        const substring = string_.substring(indice, fim)

        if (verificaSeEhPalindrome(substring)) {
          palindromos.push(substring)
        }

      }
    }
    return palindromos
  }

  const retornaMaiorPalindromo = (listaDePalindromos) => {
    let maiorPalindromo = ''

    for (const palindromo of listaDePalindromos) {
      if (palindromo.length > maiorPalindromo.length) {
        maiorPalindromo = palindromo
      }
    }

      return maiorPalindromo
  }

  const caracteresQueSeRepetem = armazenaCaracteresQueSeRepetem(s)

  let todosOsPalindromos = []
  for (const key in caracteresQueSeRepetem) {
    let indices = caracteresQueSeRepetem[key]
    let palindromos = pegaPalindromos(s, indices)

    if (palindromos.length > 0)
    todosOsPalindromos.push(...palindromos)
  }

  if (todosOsPalindromos.length === 0) return s[0] // se não achou nenhum palíndromo, retorna a primeira letra
  const maiorPalindromo = retornaMaiorPalindromo(todosOsPalindromos)
  return maiorPalindromo

};

// let maiorppp = longestPalindrome("12")
// console.log(maiorppp)
