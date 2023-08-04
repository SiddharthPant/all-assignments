/*
    ## Counter without setInterval

    Without using setInterval, try to code a counter in Javascript.
*/

sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let counter = async () => {
    let counter = 0;

    while (true) {
        counter++;
        console.log(counter);
        await sleep(1000);
    }
}

counter();