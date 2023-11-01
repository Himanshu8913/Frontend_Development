/* let obj = {
    toString() {
        // by default gives [object Object] which is type of string
        return 10; // type become number
    },
    valueOf() {
        // by default it return the same object -> type of obj 
        return 10;
    }
} */

let obj = {};

console.log(10 - obj); // Number -> obj.valueOf() -> object, toString() -> [object Object] -> string -> string [object Object] to Number -> NaN