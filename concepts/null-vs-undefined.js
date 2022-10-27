// What will be logged in first example and in second example?

let var1;
console.log(var1);
console.log(typeof var1);

let var2 = null;
console.log(var2);
console.log(typeof var2);


/**
 * In 1st example we didn't assign anything to variable `var1` which means variable is not defined.
 * Output of line nos. 4 & 5 will be `undefined`
 * In 2nd example we have assigned value `null` to variable `var2`
 * Output of line nos. 8 will be `null`
 * Output of line nos. 9 will be `object` because there is no such type as `null`
 * 
 * Undefined means variable is declared, but no value is assigned to it
 * Null in JS is an assignment value, which means it's a value that we can assign to a variable
 * 
 * null and undefined are essentially two different values that mean the same thing
 * Null is used to define something programmatically empty. 
 * Undefined is meant to say that the reference is not existing. 
 * A null value has a defined reference to "nothing". 
 * If you are calling a not existing property of an object, then you will get undefined.
 */