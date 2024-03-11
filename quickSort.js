import { generateRandomArray } from "./arrayGen.js";

function partition(arr, low, high) {
   let pivot = arr[high];

   let i = low - 1;

   for (let j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
         i++;
         [arr[i], arr[j]] = [arr[j], arr[i]];
      }
   }

   [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
   return i + 1;
}


function quickSort(arr, low, high) {
   if (low < high) {
      let pidx = partition(arr, low, high);

      quickSort(arr, low, pidx - 1);
      quickSort(arr, pidx + 1, high);
   }
}

const n = process.argv.slice(2)[0];
let arr;

arr = generateRandomArray(n);

console.log("N:", n);
// console.log("Array:", arr);

console.time("Time to sort");
quickSort(arr, 0, n - 1);
console.timeEnd("Time to sort");

// console.log("Sorted array:", arr);