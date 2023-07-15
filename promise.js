function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function delayedLog(item) {
    await delay(1000);
    console.log(item);
}

async function processArray(array) {
    for (const item of array) {
        await delayedLog(item);
    }
}

processArray([1, 2, 3, 4, 5]);
