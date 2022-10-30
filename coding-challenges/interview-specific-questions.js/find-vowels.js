//Write a function which counts vowels in a string

const findVowels = str => {
    const vowels = 'aeiou';
    
    return str.toLowerCase().split('').reduce((accumulator, char) => {
       return vowels.includes(char) ? accumulator + 1 : accumulator
    }, 0)

}