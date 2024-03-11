import { generateRandomArray } from "./arrayGen.js";

function heapSort(arr) {
   var N = arr.length;

   for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
      heapify(arr, N, i);

   for (var i = N - 1; i > 0; i--) {
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      heapify(arr, i, 0);
   }
}

function heapify(arr, N, i) {
   var largest = i;
   var l = 2 * i + 1;
   var r = 2 * i + 2;


   if (l < N && arr[l] > arr[largest])
      largest = l;

   if (r < N && arr[r] > arr[largest])
      largest = r;

   if (largest != i) {
      var swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;

      heapify(arr, N, largest);
   }
}

const n = process.argv.slice(2)[0];
let arr;

arr = generateRandomArray(n);

console.log("N:", n);
// console.log("Array:", arr);

console.time("Time to sort");
heapSort(arr);
console.timeEnd("Time to sort");

// console.log("Sorted array:", arr);