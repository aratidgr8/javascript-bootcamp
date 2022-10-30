/**
 * Debouncing is very useful to improve the performance of large scale web applications.
 * For eg: If there is search bar which prompts user search results depending on what input string user is looking for
 * We do not fire `autosuggest` API call for every single keystroke.
 * Instead we wait for approx. 200miliseconds time after user stops typing every single time 
 * And then fire API call and try to fetch data related search string
 * This purposefull delay in calling a function to improve performance is known as `debouncing`
 * Debounce means a function will be called only ones after certain time interval
 */


const debounce = (func, timeout = 300) => {
    let timer;
    //Debounce will return new function
    
    return (...args) => {
        //It means, 
        //we will call func (which is `searchInput` function) 
        //with this (which is correct context) and 
        //args = [foo] (which is an array of arguments for searchInput function) 
        //after 200ms
        //We store setTimeout in a variable `timer` 
        //And clear it every single time a new call is made to the debounce function 
        //So function is called only onces after timeout
        //For the 1st time when timer is undefined it wont do anything
        //If we have numeric value in timer, previous setTimeout will be destroyed
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }

}


//We have created a searchInput function which will be debounced,
//Which means every single call to this function will be delayed
//User is typing something in i/p field, and we wait for 200ms after he finishes writing
const searchInput = name => {
    console.log("searching", name)
}

//We will debounce `searchInput` function call by 200ms
const processChange = debounce(searchInput, 2000)

//Even if we are calling `processChange` 4 times it will be called only once after 2s
processChange("foo")
processChange("foo")
processChange("foo")
processChange("foo")


/**
 * To summarize `debounce` function allows us to call some function only once after specific time
 * It is ideal to use debouncing in search bar, lazy loading or API call on scroll events, window resize
 */



