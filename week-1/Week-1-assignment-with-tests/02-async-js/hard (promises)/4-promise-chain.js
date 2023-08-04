/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    waitOneSecond()
        .then((result) => {
            console.log(result);
            return waitTwoSecond()
        })
        .then((result) => {
            console.log(result);
            return waitThreeSecond()
        })
        .then((result) => {
            console.log(result);
            const end = Date.now();
            console.log(`Time taken: ${end - start}ms`);
        });
}

// This will resolve after 6 seconds as all are run sequentially and hence will finish
// in sum of all the times.
calculateTime();
// Output:
// Promise One resolved after 1 second
// Promise two resolved after 2 second
// Time taken: 6008ms