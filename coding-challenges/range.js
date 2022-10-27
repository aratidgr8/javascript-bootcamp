/**
 * write a `helper` function to implement range
 * range(1, 50) => 1,2,3,...50  
 */ 
 

//Using `for` loop
const rangeUsingFor = (start, end) => {
    let result = []
    for(i = start; i <= end; i++){
        result.push(i)
    }
    return result
}
console.log(rangeUsingFor(1, 50))

//Smart 1 line code approach  using `keys`
//This how helper functions are written in lambda / lodash libraries
//Create an empty array
//Iterate over its keys using `map`
//Return a new array
const rangeUsingKeys = (start, end) => [...Array(end).keys()].map(element => element+start)
console.log(rangeUsingKeys(1, 50))