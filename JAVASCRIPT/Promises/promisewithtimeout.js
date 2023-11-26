function getRandomInt(max) {
    return Math.floor(Math.random() * 10);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        setTimeout(function () {
            let num = getRandomInt(10);
            if(num % 2 == 0) {
                // if random number is even then fulfill promise
                resolve(num);
            }
            else {
                // if random number is odd then reject promise
                reject(num);
            }
        }, 10000);
        
    });
}

let y = createPromiseWithTimeout();
console.log(y);