import { generateRandomArray } from "./arrayGen.js";

function swap(arr, xp, yp) {
   var temp = arr[xp];
   arr[xp] = arr[yp];
   arr[yp] = temp;
}

function bubbleSort(arr, n) {
   var i, j, temp;
   var swapped;
   for (i = 0; i < n - 1; i++) {
      swapped = false;
      for (j = 0; j < n - i - 1; j++) {
         if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
         }
      }

      if (swapped == false)
         break;
   }
}

const n = process.argv.slice(2)[0];
let arr;

arr = generateRandomArray(n);

console.log("N:", n);
// console.log("Array:", arr);

console.time("Time to sort");
bubbleSort(arr, n);
console.timeEnd("Time to sort");

// console.log("Sorted array:", arr);