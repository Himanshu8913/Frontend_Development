// ToString -> "" + value
console.log("" + 0); // 0 -> "0"
console.log("" + (-0)); // -0 -> "0"

console.log("" + []); // [] -> ""
console.log("" + {}); // {} -> [object Object]

console.log("" + [1,2,3]); // 1,2,3

console.log("" + [null, undefined]); // ,

console.log("" + [1,2,null,4]); // 1,2,,4

// ToNumber
console.log(0 - "10"); // -10
console.log(0 - "O10"); // NaN