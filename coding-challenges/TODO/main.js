// Implement a click on todo item as fast as possible


/**
 * We add an event listener on list parent element and not on every single list item
 * As list can be very large, adding too many event listeners will break the page effeciency
 */

const app = document.querySelector("todo-app");
app.addEventListener("click", (e)=>{
    //If clicked element is the child of TODO list
    //We execute event listener code
    if(e.target && e.target.classList.contains("item")){
        console.log("you checked item from your list:", item)
    }
})

