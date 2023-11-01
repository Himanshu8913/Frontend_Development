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

let obj1 = {x: 9, y: 8};
console.log(100 - obj1); // NaN

let obj2 = {x: 7, valueOf() { return 99}};
console.log(100 - obj2); // 1

let obj3 = {x: 7, toString() { return 88}};
console.log(100 - obj3); // 12

let obj4 = {x: 7, toString() { return {}}};
console.log(100 - obj4); // TypeError