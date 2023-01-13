// https://leetcode.com/problems/count-common-words-with-one-occurrence/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  const contaOcorrencias = (palavra, lista) => {
    let ocorrencias = 0
    for (const item of lista) {
      if (item === palavra) ocorrencias++
    }
    return ocorrencias
  }
  let menorLista = words1.length < words2.length ? words1 : words2

  let palavrasComUmaOcorrencia = 0
  for (const word of menorLista) {
    const ocorrenciaNaPrimeiraLista = contaOcorrencias(word, words1)
    const ocorrenciaNaSegundaLista = contaOcorrencias(word, words2)
    if (ocorrenciaNaPrimeiraLista == 1 && ocorrenciaNaSegundaLista == 1) {
      palavrasComUmaOcorrencia++
    }
  }
  return palavrasComUmaOcorrencia
};

// countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"])
