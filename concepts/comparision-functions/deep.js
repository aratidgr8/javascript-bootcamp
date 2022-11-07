/**
 * Create a `typeOf` function
 * 90% code is same as shallow comparision
 * We just recursively call compare function for nested objects / arrays
 */

 const typeOf = input =>{
    const rawObject = Object.prototype.toString.call(input).toLowerCase()
    /**
     * Regex to remove string `object` from above variable 
     * if we have for eg: Object.prototype.toString.call(1).toLowerCase() o/p will be [object number]
     *  We just need the value after dtring `object`
     */
    const typeOfRejex = /\[object (.*)]/g
    const type = typeOfRejex.exec(rawObject)[1]
    return type;
}


/**
 * It cannot compare nested arrays / objects
 * It is faster comparision method
 */

const deepCompare = (source, target) =>{

    //If type is not same, compared variables are not same
    if(typeOf(source) !== typeOf(target))
        return false 

    /**
     * Since `type`of 2 variables is same   
     * We check if they are arrays
     * If so we check if the length of the two arrays is same
     * If it is different then they are not same
     */

    // 
    if(typeOf(source) === 'array'){
        if(source.length !== target.length)
            return false

        /**
         * We check every element in source is same as the element in target array and at same index
         * We recursively call `deepCompare` function with nested values   
         */
        
        return source.every((el, index) =>  deepCompare(el, target[index]))
    }


    if(typeOf(source) === 'object'){
        //We check if length of keys is same
        if(Object.keys(source).length !== Object.keys(target).length){
            return false
        }
        /**
         * We use plain JS comparision i.e. triple equal to here since, values compared are primitives
         * So it wont work for deep nested elements
         * Here we are comparing every single value of the object
         */
        
        return Object.keys(source).every(key => deepCompare(source[key],target[key]))
    }

    //Convert date to a numeric value in miliseconds and then perform comparision
    if(typeOf(source) === 'date'){
        return source.getTime() === target.getTime()
    }

    return source === target;
}



//Will work and find correct comparision o/p for nested elements
console.log(deepCompare([[1]],[[1]]))
console.log(deepCompare({a : {b :1}}, {a : {b :1}}))

//Will return `false` as shallowComparision does not work with nested objects or arrays
console.log(shalllowCompare([[1]],[[1]]))
console.log(shalllowCompare({a : {b :1}}, {a : {b :1}}))



