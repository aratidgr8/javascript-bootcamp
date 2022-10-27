// Write a function which can concatenate 2 arrays

const arr1 = [1]
const arr2 = [2,3]

//Approach - 1: We spread and push 1 array into another
//Here our function `mergeTwoArrays` will mutate arr1 as well, which is undesired
const mergeTwoArrays = (a1, a2) => {
    a1.push(...a2)
    return a1;
}

let result = mergeTwoArrays(arr1, arr2)
console.log(result, arr1, arr2)


//Better approach
const mergeConcatTwoArrays = (a1, a2) => {
    return a1.concat(a2);
}

let concatResult = mergeConcatTwoArrays(arr1, arr2)
console.log(concatResult, arr1, arr2)

//Spread Operator - ES6 approach
//Can be used to concat objects as well
const mergeSpreadTwoArrays = (a1, a2) => {
    return [...a1,...a2];
}

let spreadResult = mergeSpreadTwoArrays(arr1, arr2)
console.log(spreadResult, arr1, arr2)
