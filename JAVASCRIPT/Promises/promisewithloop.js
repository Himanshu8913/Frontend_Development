function getRandomInt(max) {
    return Math.floor(Math.random() * 10);
}

function createPromiseWithLoop() {
    return new Promise(function executor(resolve, reject) {
        for(let i = 0; i < 10000000000; i++) {}
        let num = getRandomInt(10);
        if(num % 2 == 0) {
            // if random number is even then fulfill promise
            resolve(num);
        }
        else {
            // if random number is odd then reject promise
            reject(num);
        }
    });
}

let x = createPromiseWithLoop();
console.log(x);