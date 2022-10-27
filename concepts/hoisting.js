// What will be console.logged here

// Question 1
console.log(foo);
foo = 1;

// question 2
console.log(foo);
var foo = 2;


// question 3
foo = 3;
console.log(foo);
var foo;


/**
 * O/p of line nos. 4 will be Uncaught reference error beacause when console.log on line nos. 4 executed, `foo` is not defined.
 * 
 * Declaration of the variable will bubble to the top of the file, when you are using `var` or `function` keyword
 * which means code in Q2, will be interpretted as, 
        var foo; 
        console.log(foo); 
        foo = 2;
 * O/p of line nos. 8 won't be an error, it won't be 2, but it would be `undefined`
 * 
 * Due to concept of Hoisting variable declared with `var` keyword
 * code in Q3, will be interpretted as,
        var foo;
        foo = 3;
        console.log(foo);
 * O/p of line nos. 14 will be 3
 *
 * Same is true in case function variables as well if they declared using keyword `function`
 * for eg: if you have below code anywhere,
            foo();
            function foo(){ ... }
 * This function definition will bubble to top, which means it doesn't matter where you are writing on which line `function foo` it will be executed 1st
 * Above code will not throw any error
 * P.S. If we use `const` or `let` keyword they do not bubble to top.            
 */