// Write a function which get's an array and an element and returns a array with this element at the end


const num = [1,2];

// If we use `push` method to add an element at the end of the array. 
//It mutate the original array
const append = (arr, element) => {
    arr.push(element)
    return arr;
}
console.log(append(num,3))


 //Even if we create a new array and run `push` function still both the arrays get modified
const appendToNewArray = (arr, element) => {
    arr.push(element)
    return arr;
}

const newArrray = appendToNewArray(num, 3)
console.log(newArrray)
console.log(num)

/**  
 * Above 2 approaches are an example of `bad` code, as you function modifies some data which is outside of the function.
 * Imagine defining numbers array in 1 part of your code.
 * Then somewhere calling `append` function on it, but out of the blue you modified original `num` array as well.
 * Instead we should make use of spread operator, in our function
*/

const appendBestWay = (arr, elemment) => {
    return [...arr, elemment]
}

console.log(appendBestWay(num,3))
console.log(num)

/**
 * Above function `appendBestWay` does not change any variable outside of the function
 * It is known as `pure` function
 * It will return the same result every single time when we are calling with same arguments
 * Also it doesn't modify any variable outside of the function
 */


