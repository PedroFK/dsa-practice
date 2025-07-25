function somaPares(numeros: number[]): number {
  return numeros
      .filter(n => n % 2 === 0)
      .reduce((acc, n) => acc + n, 0);
}

console.log(somaPares([1, 2, 3, 4, 5, 6]));
