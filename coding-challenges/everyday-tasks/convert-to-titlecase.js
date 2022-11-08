/**
 * Write a function to convert a string to title case
 * Provided test cases
 * titleCase("I’m a little tea pot") should return I’m A Little Tea Pot".
 * titleCase("sHoRt AnD sToUt") should return "Short And Stout".
 * titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout".
 */

const titleCase = str => {

    /**
     * Convert string to lower case
     * Split it into an array by space
     * map over array, 
     * Take zeroth character of every word convert it to uppercase
     * slice(1) return entire string except 1st character
     * Finally join the string by space
     */

    return str.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(titleCase("I'm a little tea pot"))