const privateCounter = () =>{
    let count = 0;

    return {
        increment: (val = 1) => {
            count += val;
        },
        getValue: () => {
            return count
        }
    }

}

const counter = privateCounter();
console.log(counter.getValue())
counter.increment()
console.log(counter.getValue())
console.dir(counter.getValue)

/**
 * Closure means that we have access inside of a function to the outside scope.
 * In above increment & getValue both access `count` variable which is outside both of them at the top
 * When means `closure` function has access to all properties inside itself and  all properties and all properties defined in default
 * 
 * To understand closure better lets look at o/p of line nos. 19, refer to closure.png
 * If you check `scopes` property of getValue object, we have property `closure`
 */


//You need to create a function which will store inside secret string and will return when we call this function again

//privateSecret gives back a function 
const privateSecret = () => {
    let secret = "foo";
    return () => secret;
}

const getSecret = privateSecret()
console.log(getSecret())

//O/p will be `foo`
//Secret is a closure which is available outside after we store privateSecret in additional variable getSecret. 
