const paragraph = document.querySelector("p");

/**
 * Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example) 
 */
    paragraph.innerHTML = paragraph.innerHTML.split(" ").map(word => word.length >= 8 ? `<span style="background-color: yellow">${word}</span>` : word).join(" ")
/**
 * Take innerHTML of paragraph
 * split by space
 * map over every word
 * check it's length
 * if length >= 8, add that word in a span with background-color styled as yellow
 * else, keep the word as it is
 * finally join all the words again on space 
 * and set the final value to innerHTML of paragraph
 */




/**
 * Add a link back to the source of the text after paragraph tag 
 */
    const link = document.createElement('a')
    link.href = "https://google.com"
    link.innerText = "Take me to Google"
    document.body.appendChild(link)
/**
 * Create a link element & append it to body
 */




/**
 * Split each new sentence to a separate line in the paragraph text
 * A sentence can be assumed to be a string of text terminated with a period(.) 
 */
    paragraph.innerHTML = paragraph.innerHTML.split(/\.[^.|<]/).join(".</p><p>")+"</p>";
/**
 * Split paragraph into sentences by checking for "." 
 * But escaping dot if it is followed by more dots and splitting only after last dot  
 */
