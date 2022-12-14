//write a function to shuffle elements inside array
//elements can be numbers / strings / arrays / objects


const arr = [1,2,3,4]

const shuffleArray = arr => {
    return arr.map(item => {
        
        return { key: Math.random(), value: item }
    }).sort((a,b) => a.key - b.key).map(a => a.value)
}

console.log(shuffleArray(arr))

/**
 * Create an object with 2 properties key & value.
 * `key` holds a random number generated by Math function
 * `value` holds the value of element in the array
 * Sort this new array in ascending order by value of `key` which is number
 * return shuffled array in new sorted order by using `map`
 */