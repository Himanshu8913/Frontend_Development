console.log(2 - 9); //-7
console.log(2 - null); // (2 - null) -> (2 - 0) -> 2
console.log(2 - undefined); // (2 - undefined) -> (2 - NaN) -> NaN
console.log(2 - "453"); // (2 - "452") -> (2 - 453) -> -451
console.log(2 - "43rty2"); // 2 - NaN -> NaN

console.log(2 - "0xa"); // 2 - 0xa -> -8 its a number