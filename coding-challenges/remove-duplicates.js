//Remove all duplicates in an array
const arr = [1,1,1,2,2,3,4,4,5,6,6,6,6,6,7]

//Using Loops - Primitive not recommended for advance level coders
const uniqueArrayByLoop = (arr) => {
    let result = []
    arr.forEach(item => {
        if(!result.includes(item))
            result.push(item)
    })
    return result;
}
console.log(uniqueArrayByLoop(arr))


//Using Higher Order functions - slightly better approach
// `filter` method
const uniqueArrayFilter = arr => arr.filter((element, index) => arr.indexOf(element) === index)
console.log(uniqueArrayFilter(arr))
//`reduce` method
const uniqueArrayReduce = arr => {
    return arr.reduce((accumulator, element) => {
                return accumulator.includes(element) ? accumulator : [...accumulator, element]
            }, [])
}
console.log(uniqueArrayReduce(arr))


//Using `set` - ES6 property, best & smallest approach
//Set is an object that allows you to store unique values of any type
const uniqueArraySet = arr => [...new Set(arr)]
console.log(uniqueArraySet(arr))