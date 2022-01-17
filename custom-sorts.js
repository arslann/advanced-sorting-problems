function quicksort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return


  if (arr.length <= 1) return arr;
  // Pick a pivot

  let pivot = arr[0];

  let smaller = [];
  let larger = [];

  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];

    if (el < pivot) smaller.push(el);
    else larger.push(el);
  }

  let smallerSorted = quicksort(smaller);
  let largerSorted = quicksort(larger);

  return [...smallerSorted, pivot, ...largerSorted]

  // Put all values smaller than the pivot to the `left`
  // Put all values larger than the pivot to the `right`

  // Sort the left half
  // Sort the right half

  // Return the array with the left, pivot, and right values
}

function mergesort(arr) {

  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Divide the array in half

  let left = arr.splice(0, arr.length / 2);
  let right = arr;

  // Recursively sort the left half
  // Recursively sort the right half
  let leftSorted = mergesort(left);
  let rightSorted = mergesort(right);

  return merge(leftSorted, rightSorted);

  // Merge the halves together and return
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let result = [];

  // Point to the first value of each array

  while (arrA.length && arrB.length) {
    if (arrA[0] < arrB[0]) {
      result.push(arrA.shift());

    } else {
      result.push(arrB.shift());
    }
  }

  return [...result, ...arrA, ...arrB]
  // While there are still values in each array...
  // Compare the first values of each array
  // Add the smaller value to the return array
  // Move the pointer to the next value in that array

  // Return the merged array
}

function ageSort(users) {
  // Fill this in
}


function oddEvenSort(arr) {
  // Fill this in
}

function validAnagrams(s, t) {
  // Fill this in
}

function reverseBaseSort(arr) {
  // Fill this in
}

function frequencySort(arr) {
  // Fill this in
}

module.exports = [oddEvenSort, validAnagrams, reverseBaseSort,
  frequencySort, ageSort];


let arr = [5, 4, 10, 1, 8, 3, 6, 2, 22, 18, 0, 50, 48]

console.log(mergesort(arr))