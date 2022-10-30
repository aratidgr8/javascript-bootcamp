//Write a function which counts vowels in a string

const findVowels = str => {
    const vowels = 'aeiou';
    
    return str.toLowerCase().split('').reduce((accumulator, char) => {
       return vowels.includes(char) ? accumulator + 1 : accumulator
    }, 0)

}

/**
 * Create a string with all vowel characters
 * Convert given string to lowercase
 * Split string into characters
 * Run `reduce` over the split array
 * Initialize `accumulator` to zero
 * Increment value of `accumulator` by 1 whenever we find a character in array that matches with any characters in `vowels` string
 * Return final of value of accumulator, i.e. count of vowels in the string
 */