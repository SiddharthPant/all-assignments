/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, n * 1000);
    });
}

function waitOneSecond() {
    return wait(1).then(() => "Promise One resolved after 1 second");
}

function waitTwoSecond() {
    return wait(2).then(() => "Promise two resolved after 2 second");
}

function waitThreeSecond() {
    return wait(3).then(() => "Promise two resolved after 3 second");
}

function calculateTime() {
    const start = Date.now();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then((result) => {
            result.forEach((res) => console.log(res));
            const end = Date.now();
            console.log(`Time taken: ${end - start}ms`);
        });
}

// This will resolve after 3 seconds as that is the longest promise
// and all are non-blocking to each other.
calculateTime();