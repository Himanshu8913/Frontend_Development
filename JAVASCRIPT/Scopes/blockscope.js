{
    var x = 10; 
    /* var doesn't support block scope 
    It only support global or functional scope 
    Here It will convert to global acope
    */
    let y = 10;
}

console.log(x);
console.log(y); // It will throw error as 'y' scope is block scope.