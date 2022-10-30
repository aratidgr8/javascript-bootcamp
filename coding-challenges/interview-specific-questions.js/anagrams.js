/**
 * Write a function which checks if string is an anagram
 * Anagrams are words that have the same characters in the same quantity. 
 * This means that two strings are anagrams if we can rearrange one to get the other.
 * Here are some examples of words that are anagrams.
 * "listen" and "silent"
 * "rail safety" and "fairy tales"
 * "dormitory" and "dirty room"
 * "the eyes" and "they see"
 */


const anagrams = (str1, str2) => {

    //If length of 2 strings is not same, they are not anagrams
    if(str1.length !== str2.length)
        return false
    
    //Convert both the strings to lowercase         
    const str1LC = str1.toLowerCase()
    const str2LC = str2.toLowerCase()

    //If they are same strings but in different case originally, they are not anagrams
    if(str1LC === str2LC)
        return false

    //Now split the strings into an array, sort it and join back into strings
    //If they are the same, they are anagrams
    return str1LC.split('').sort().join('') === str2LC.split('').sort().join('')

}