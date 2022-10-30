//Check if given string is a palindrome

const ifPalindrome = str => str === str.split("").reverse().join("")

/**
 * We split string into alphabets
 * Convert it to an array
 * Reverse the array
 * Then join reverse arrays alphabet again into a string
 * If both are same, then string is a palindrome else it is not a palindrome
 */