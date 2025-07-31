// Desafio: Soma dos dois números que somam um alvo
// Dado um array de números e um alvo, retorne os índices dos dois números que somam o alvo.

// Exemplo:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1] porque nums[0] + nums[1] == 9

function targetSum(array: number[], targetNumber: number) {
  const map = new Map()
  for (let i = 0; i < array.length; i++) {
    const complement = targetNumber - array[i]
    if (map.has(complement)) {
      return [map.get(complement)!, i]
    }
    map.set(array[i], i)
  }
  return []
}

console.log(targetSum([1, 2, 4, 6], 7)); // [0, 3]
