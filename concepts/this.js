function getItem(){
    console.log(this)
}
getItem()


/**
 * O/P of above code will be `window` object
 * Inside functions `this` refers to global object
 * It may be window / undefined or something else depends on the context
 */

const item = {
    title : "Ball",
    getItem(){
        console.log("this", this)
    },
}
item.getItem();

/**
 * o/p of above code will be `item` object
 * When we methods inside object, `this` always refers to this object
 */


class Item{
    title = "Ball";
    getItem(){
        console.log("this", this)
    }
}

const itemInstance = new Item();
itemInstance.getItem()

/**
 * Inside methods in our class, when we have instance, we have a reference to our instance
 * o/p of above code wil be, 
 * Item { title: "Ball"}
 * which means above object is an instance of class `item`
 */


 class Item2{
    title = "Ball";
    getItem(){
       function somefunction(){
        console.log("this", this)
        }
        somefunction()
    }
}

const itemInstanceNew = new Item2();
itemInstanceNew.getItem()

/**
 * o/p will be undefined
 * Because inside function we are referencing global object
 * To resolve this issue we could create a temp this variable
 */

 class Item3{
    title = "Ball";
    getItem(){
       //temp varible to store value of `this` 
       const this_ = this
       function somefunction(){
        console.log("this", this_)
        }
        somefunction()
    }
}

const itemInstanceTemp = new Item3();
itemInstanceNewTemp.getItem()


/**
 * Alternative approach could be to use `arrow` function
 * arrow function get context of parent i.e. context from getItem which has reference to instance of the object
 * Hence it is highly recommended to use arrow function
 */


class Item4{
    title = "Ball";
    getItem(){
       [1,2,3].map(i => console.log("this", this))       
    }
}

const itemInstanceArrow = new Item4();
itemInstanceNewArrow.getItem()


/**
 * To summarize,
 * Inside function keyword you will have reference to global object
 * Inside objects you have reference to object itself
 * Inside classes you have reference to instance of class
 * Inside function inside method or directly inside class it will be reference to undefined
 */