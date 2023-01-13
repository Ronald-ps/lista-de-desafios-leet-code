// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  s = [...s].reverse().join("") /* Verificará os valores de trás pra frente, por causa de casos como IV (é mais fácil olhar o passado do que o futuro kkk) */
  const equivalence = {
    i: 1,
    v: 5,
    x : 10,
    l : 50,
    c : 100,
    d : 500,
    m : 1000
  }
  let previousValue = 0
  let total = 0
  for (const caracter of s) {
    let currentValue = equivalence[caracter.toLowerCase()]
    total += currentValue >= previousValue ? currentValue : -currentValue /* ex: LIV, que invertido fica VIL, I < V (1 < 5), subtraio; L > I (50 > 1), somo.*/
    previousValue = currentValue
  }
  return total
};

// mude a default string para testar. não faça gracinha usando letras inexistentes, hein.
const DEFAULT_STRING = 'LiV'
console.log(romanToInt(DEFAULT_STRING))
