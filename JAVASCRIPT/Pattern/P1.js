/**
 *  -> *
 *     **
 *     ***
 *     ****
 *     *****
 */

function pattern(n) {
    var str = "";
    for (let row = 1; row <= n; row++) {
        for (let col = 0; col < row; col++) {
            str += "*";
        }
        str += "\n";
    }
    return str;
}

console.log(pattern(5));
