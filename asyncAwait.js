const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
    for (let value of values) {
        await delay(1000);
        console.log(value);
    }
}

// Example:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);
