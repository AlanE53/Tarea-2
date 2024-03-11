import { generateRandomArray } from "./arrayGen.js";

function insertionSort(arr, n)
{  
   let i, key, j;  
   for (i = 1; i < n; i++) 
   {  
      key = arr[i];  
      j = i - 1;  
   
      while (j >= 0 && arr[j] > key) 
      {  
         arr[j + 1] = arr[j];  
         j = j - 1;
      }  
      arr[j + 1] = key;  
   }  
}  
   
const n = process.argv.slice(2)[0];
let arr;

arr = generateRandomArray(n);

console.log("N:", n);
// console.log("Array:", arr);

console.time("Time to sort")
insertionSort(arr, n);
console.timeEnd("Time to sort");

// console.log("Sorted array:", arr);