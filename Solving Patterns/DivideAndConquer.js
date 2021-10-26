//Divide and conquer
//This involves dividing a data set into smaller chunks and repeating a process with a subset data.

//Given a sorted array of integers, write a function called search, that accepts a value
//and returns the index where the value passed to the function is located. If the value
//is not found, return -1

//1. simple
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
}

//2. Refactor
function search(arr, val) {
//     let min = 0;
//     let max = arr.length - 1

//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2);
//         let currentElement = arr[middle];

//         if (arr[middle] < val) {
//             min = middle + 1;
//         } else if (arr[middle] > val){
//             max = middle - 1;
//         } else {
//             return middle;
//         }
//     }
//     return -1;
// }

// search([1,2,3,6,7,8,11,14,25,30])
