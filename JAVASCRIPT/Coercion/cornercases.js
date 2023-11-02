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

console.log(0 - 010); // -8 => 010 convrt to octal number
console.log(0 - "0xb"); //-11 => 0xb convert to hexadecimal number
console.log(0 - 0xb); //-11

console.log(1 - []); // 1 coz [] becomes 0
console.log([""] - 1); // -1 coz [""] becomes 0

console.log(["0"] - 1); // -1