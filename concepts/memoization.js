/**
 * Design a memorization function, which adds 10 to provided value and take it from cache if it was already calculated.
 * Memoization means we are caching values to avoid making same operation again
 */


const memoizeAdd = () => {
    let cache = {}

    //Closure
    return (value) => {
        if(value in cache){
            console.log('fetching from cache')
            return cache[value]
        }
        else{
            console.log('calculating results')
            const result = value + 10
            cache[value] = result
            return result;
        }
    }
}

const newAdd = memoizeAdd()

//O/p will be 19, as it adds 10
console.log(newAdd(9))
//O/p will be same as 19, but this time it wont be calculated, 
console.log(newAdd(9))