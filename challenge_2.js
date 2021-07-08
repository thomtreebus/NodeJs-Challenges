
/**
 * ALGORITHMS
 * 
 * Implement an algorithm that can pass the unit tests. 
 * Avoid using built-in functions as much as possible
 * 
 * Difficulty: Medium
 */

function sort(arr) {
    //let newArray = [];
    // ONLY CHANGE CODE BELOW
    const half = arr.length / 2
    
    // Base case
    if(arr.length < 2){
        return arr;
    }
    
    const left = arr.splice(0, half)
    return merge(sort(left),sort(arr))
    // ONLY CHANGE CODE ABOVE
    //return newArray;
}

function merge(left, right) {
    let arr = [];

    while (left.length && right.length) {
        
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }

    return [...arr, ...left, ...right];
    
}

function require(condition) {
    if (!condition)
        console.warn ("CONDITION WAS NOT MET");
}

require (sort ([]) == []);
require (sort ([1, 2, 3, 4, 5]) == [1, 2, 3, 4, 5]);
require(sort([1, 3, 4, 2, 5]) == [1, 2, 3, 4, 5]);


