
 function primeNumber(n,m)
{ 
  let arr = [];

  for (let i = n + 1; i < m; i++) {
      let isPrime = true; 

      for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j === 0) {
              isPrime = false; 
              break; 
          }
      }

      if (isPrime) {
          arr.push(i); 
      }
  }

  return arr;
}
console.log(primeNumber(1,10))



