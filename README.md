# AppAcademy Open - Advanced Sorting Project

## Learning Goals
* Explain the complexity of and write a function that performs merge sort on an array of numbers.
* Explain the complexity of and write a function that performs quicksort on an array of numbers.

## Part 1: Improvements to the Naïve Sorts
Merge sort and quicksort are both sorting algorithms that utilize the divide and conquer method, which significantly improves their time complexity. However, that's not to say that choosing one and sticking with it is always your best bet. They both have pros and cons and knowing the differences between the two can help you apply your knowledge of these algorithms to other sorting problems. Now you'll dive into each of them.

## Quicksort
Quicksort utilizes pivot points to keep track of which elements are larger and smaller than the pivot element.

    function quicksort(arr) {

      // Check if the input is length 1 or less
      // If so, it's already sorted: return

      // Pick a pivot

     // Put all values smaller than the pivot to the `left`
     // Put all values larger than the pivot to the `right`

     // Sort the left half
     // Sort the right half

     // Return the array with the left, pivot, and right values
     }
Again identify the worst and best case time complexity. If you can find improvements to the algorithm, try it out for yourself!

This implementation uses extra memory to keep track of the left and right halves of the pivots. However, this can also be done in-place. If you're up for a challenge, try to find a way to solve this in-place!

## Merge Sort
In a nutshell, the merge sort splits the input array into even chunks, sorting them, and then merging the chunks back together in order. Try to map that out:

(NOTE: You will need to implement your own merge function as well)

      function mergesort(arr) {

      // Check if the input is length 1 or less
        // If so, it's already sorted: return

      // Divide the array in half

     // Recursively sort the left half
      // Recursively sort the right half

     // Merge the halves together and return
      }

     // Takes in two sorted arrays and returns them merged into one
      function merge(arrA, arrB) {

      // Create an empty return array

     // Point to the first value of each array

     // While there are still values in each array...
        // Compare the first values of each array
        // Add the smaller value to the return array
       // Move the pointer to the next value in that array

      // Return the merged array
     }

Identify the worst and best case time complexity. Is your solution optimal? If you can find improvements to the algorithm, try it out for yourself!

## Part 2: Tackling Custom Sort Problems
Practice coding some irregular sorting problems that aren't just looking to sort its elements in ascending order:

## Part 3: Challenge Problems
The following problems are meant to test your Polya's Problem Solving abilities! These problems will require you to take time to understand the problem and come up with a bulletproof plan to execute the solution.
