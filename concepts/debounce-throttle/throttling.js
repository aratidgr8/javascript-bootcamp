//Create a throttle function

// Throttle function will be executed immediately 
// But after that calling of function is ignored for our timeout
const throttle = (func, timeout = 300) => {   

    //This boolean will let us know if we again execute the function again
    let isWaiting = false 
    return (...args) => {          
        if(!isWaiting){

            //We immediately call the throttle function
            func.apply(this, args)
            isWaiting = true
            
            //We are setting this to false again after delay of 2s
            //And unblocking the function execution
            setTimeout(() => {
                isWaiting = false
            }, timeout)
        }              
        
    }

}

//We have created a searchInput function which will be throttled
//Which means if user is typing something we will call `processChange` at the beginning 
// And then after every timeout which is 2s
const searchInput = name => {
    console.log("searching", name)
}

const processChange = throttle(searchInput, 2000)

//This will be executed immediately
processChange("foo")

//This call will be ignored since we are waiting for 2s as specified on line 24
setTimeout(()=>{
    processChange("foo")
}, 1000)

//This call will be ignored since we are waiting for 2s as specified on line 24
setTimeout(()=>{
    processChange("foo")
}, 1200)

//This call wil be executed as the earlier delay of 2s will be over
setTimeout(()=>{
    processChange("foo")
}, 2400)


/**
 * To summarize `throttle` function will call once at the begining 
 * It will wait for the specified delay till the next time it calls the same function
 * We call `Throttle` function immediately and then after the specified delay
 * We call `Debounce` function after certain timeout once user provides i/p
 */



