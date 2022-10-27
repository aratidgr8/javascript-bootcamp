/**  
 * Sort a numeric array
 */
const arr = [3,7,1,4,6]

//Ascending
const ascending = arr.sort((a,b) => a-b)
console.log(ascending)

//Descending
const descending = arr.sort((a,b) => b-a)
console.log(descending)


/**
 * Sort array of objects by authors last name 
 */

const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
];

books.sort((books1, books2) => {
    
    //Get 1st alphabet of last name
    authorLastName1 = books1.author.split(" ")[1];
    authorLastName2 = books2.author.split(" ")[1];

    //Since name value are not numbers, we can't subtract them
    return authorLastName1 < authorLastName2 ? -1 : 1
})
console.log(books)
  