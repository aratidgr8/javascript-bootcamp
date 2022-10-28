//find the number of times minimum value occurs in the list


const arr = [1,2,5,3,4,2,2]

const findMinValueOccurences = arr => {
    let minVal = arr[0]
    let charMap = {}

    arr.map(item => {
        if(item > minVal){
            minVal = item
        }
        charMap[item] = charMap[item] + 1 || 1
    })
    return charMap[minVal]
}

console.log(findMinValueOccurences(arr))

//Method - 2
const findMinValueOccurencesByfilter = arr => {
    
    //Using Math.min on spread array, find minimum value
    let minVal = Math.min(...arr)
    
    //Filter array and create a new array with on minimum value in it
    let result = arr.filter(item => item === minVal)

    //Return its length as it will give occurence of minimum value
    return result.length
}

console.log(findMinValueOccurencesByfilter(arr))