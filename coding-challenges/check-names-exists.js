// Check that user with such name exists in array of objects
// It means check property of an object inside array

const users = [
    {
      id: 1,
      name: "Jack",
      isActive: true,
    },
    {
      id: 2,
      name: "John",
      isActive: true,
    },
    {
      id: 3,
      name: "Mike",
      isActive: false,
    },
];
  

//Worst approach using `for` loop
const findElementInArray = (users, name) => {
    for(let i=0; i<users.length; i++){
        if(users[i].name === name)
            return true;    
    }
    return false
}
console.log(findElementInArray(users, "Jack"))
console.log(findElementInArray(users, "foo"))


//Small solution using `find`
//Additional boolean check is needed in case element is not found in array
const findElementInArrayUsingFind = (users, name) => { 
    const el = users.find(el => el.name === name)
    return Boolean(el)
}
console.log(findElementInArrayUsingFind(users, "Jack"))
console.log(findElementInArrayUsingFind(users, "foo"))

//Alternative approach to above would be using `findIndex` function
const findElementInArrayUsingIndex = (users, name) => { 
    const index = users.findIndex(el => el.name === name)
    //if element is not found index would be -1
    return index  > 0
}
console.log(findElementInArrayUsingIndex(users, "Jack"))
console.log(findElementInArrayUsingIndex(users, "foo"))


//Best 1 line solution
//No additional check is needed as `some` would return false, if it does not find the element
const findSomeElementInArray = (users, name) => { return users.some(el => el.name === name) }
console.log(findSomeElementInArray(users, "Jack"))
console.log(findSomeElementInArray(users, "foo"))