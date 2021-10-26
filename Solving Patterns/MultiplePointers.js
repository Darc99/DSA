//Multiple Pointers
//Creating pointers or values that correspond to an index or position and moves towards the beginning, end 
// or middle based on a certain condition.


//Write a function called sumZero which accepts a sorted array of integers.
//The function should find the pair where the sum is 0. Return an array that includes both values that sum 
// to zero or undefined if a pair does not exist.
//Brute Time complexity - O(N^2)    Space complexity - O(1) 
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
            
        }
    }
}
sumZero([-3,-2,-1,0,1,2,3])


//Refactored Time complexity - O(N)    Space complexity - O(1) 
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0 ) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
sumZero([-3,-2,-1,0,1,2,3])


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Implement a function called countUniqueValues, which accepts a sorted array and counts the unique values
//in the array. There can be negative numbers in the array, but it will always be sorted
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j)
    }
    return i + 1
}

[1,1,1,2,3,3,4,5,6,6,6,7]

