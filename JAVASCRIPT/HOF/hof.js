// higher order function -> there are functions which take another function as arguments 
// these are called higher order functions

function f(x, fn) {
    /**
     * x -> number
     * fn -> function
     */
    console.log(x);
    console.log(fn);
    fn();
}


f(10, function exec() {
    console.log("I am an expression passed to a HOF");
});

/*
* OP : 
* 10
* I am an expression passed to a HOF
*/