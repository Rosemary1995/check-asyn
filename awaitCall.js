async function fetchData() {
    // Simulate an API call with a random success or failure
    return new Promise((resolve, reject) => {
        const succeed = Math.random() > 0.5;
        setTimeout(() => {
            if (succeed) {
                resolve({ data: 'Sample data' });
            } else {
                reject(new Error('Failed to fetch data'));
            }
        }, 1000);
    });
}

async function awaitCall() {
    try {
        const response = await fetchData();
        console.log('Data:', response.data);
    } catch (error) {
        console.log('An error occurred:', error.message);
    }
}

// Example:
awaitCall();
