const getPrimes = n => {
  const isPrime = Array(n).fill(true);
  const result = []
  if(n<2) return false
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      result.push(i)
      for (let j = 2; i * j < n; j++) {
        isPrime[i * j] = false;
      }
    }
  }
  return result;
};

console.log(getPrimes(13));
