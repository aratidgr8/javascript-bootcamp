/**
 * Write a function which can convert the time input given in 12 hours format to 24 hours format
 * convertTo24HrsFormat("12:10AM");    // 00:10
 * convertTo24HrsFormat("5:00AM");     // 05:00
 * convertTo24HrsFormat("12:33PM");    // 12:33
 * convertTo24HrsFormat("01:59PM");    // 13:59
 * convertTo24HrsFormat("11:8PM");     // 23:08
 * convertTo24HrsFormat("10:02PM");    // 22:02
 */


const convertTo24HrsFormat = timeText => {
    //convert to string to lower case
    const timeTextLower = timeText.toLowerCase()
    
    //Destructure time string into an array of hours and minutes
    let [hours, mins] = timeTextLower.split(':')

    if(timeTextLower.endsWith("am")){
        //if hours value is 12, convert it 0
        hours = hours === "12" ? "0" : hours
    }
    else if(timeTextLower.endsWith("pm")){
        /**
         * Convert hours to number
         * Add 12 to hours value if it is greater than 12
         * Finally convert it to string again and assign to hours variable
         */
        hours = hours === "12" ? "0" : String(+hours+12)
    }

    /**
     * The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length 
     * padStart function will add zeros as many times as length 2
     */    
    return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0)
}


console.log(convertTo24HrsFormat("12:10AM"));       // 00:10
console.log(convertTo24HrsFormat("5:00AM"));        // 05:00
console.log(convertTo24HrsFormat("12:33PM"));       // 12:33
console.log(convertTo24HrsFormat("01:59PM"));       // 13:59
console.log(convertTo24HrsFormat("11:8PM"));        // 23:08
console.log(convertTo24HrsFormat("10:02PM"));       // 22:02