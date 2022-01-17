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

console.log(quicksort(arr))