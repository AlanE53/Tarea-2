import { generateRandomArray } from "./arrayGen.js";

function swap(arr, xp, yp) {
   var temp = arr[xp];
   arr[xp] = arr[yp];
   arr[yp] = temp;
}

function selectionSort(arr, n) {
   var i, j, min_idx;

   for (i = 0; i < n - 1; i++) {
      min_idx = i;
      for (j = i + 1; j < n; j++)
         if (arr[j] < arr[min_idx])
            min_idx = j;

      swap(arr, min_idx, i);
   }
}

const n = process.argv.slice(2)[0];
let arr;

arr = generateRandomArray(n);

console.log("N:", n);
// console.log("Array:", arr);

console.time("Time to sort");
selectionSort(arr, n);
console.timeEnd("Time to sort");

// console.log("Sorted array:", arr);