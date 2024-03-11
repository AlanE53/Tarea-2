export function generateRandomArray(n) {
   const arr = [];
   for (let i = 0; i < n; i++) {
      const randomNum = Math.floor(Math.random() * 666) + 1;
      arr.push(randomNum);
   }
   return arr;
}
