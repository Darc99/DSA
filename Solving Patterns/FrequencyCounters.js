//Frequency counters
//This pattern uses objects or sets to collect values?frequencies of values
//This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
//It is usually O(N)

                //Usefulness
//in algorithms that involves multiple pieces of data(inputs) and you need to compare to see if they consist of similar values
//to check if they are anagrams of one another
//if a value is contained inside of another value 
//anytime you are comparing pieces of data two inputs or more than two and freq of certain things occur



//Write a function called same, which accepts two arrays. 
//The function should return true if every value in the array has its corresponding value squared in the second array.
//The frequency must be the same

//O(N)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }
    for (let key in freqCounter1) {
        if (!(key ** 2 in freqCounter2)) {
            return false;
        }
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }
    console.log(freqCounter1);
    console.log(freqCounter2);
    return true;
}


//Frequency counter anagram
function validAnagram(text1, text2) {
    if (text1.length !== text2.length) {
        return false
    }

    const objContainer = {};

    for (let i = 0; i < text1.length; i++) {
        const element = text1[i];
        //if letter exists, increment otherwisw set to 1
        objContainer[element] ? objContainer[element] += 1 : objContainer[element] = 1;
    }
    console.log(objContainer);
    for (let i = 0; i < text2.length; i++) {
        const element = text2[i];
        //can't find letter or letter is zero then it's not an anagram
        if (!objContainer[element]) {
            return false
        } else {
            objContainer[element] -= 1;
        }
    }
    return true;
}











