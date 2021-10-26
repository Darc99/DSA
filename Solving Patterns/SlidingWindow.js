//Sliding Window
//This pattern involves creating a window which can either be an array or number from
//one position to another.
//Depending on certain condition, the window either increases or closes
//This useful when we have set of data like array or string and we are looking 
//for a subset that is continuous

//Write a function called maxSubarrySum which accepts an array of integers and number called n.
//The function should calculate the maximum sum of n consecutive elements in the array.
//Brute
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    //using -ve infinity to account for possible negative numbers
    let max = -Infinity
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
            if (temp > max) {
                max = temp;
            }
        } 
        console.log(temp,max)
    }
    return max;
}
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


//Refactored
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)