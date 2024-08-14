async function fetchApi1() {
    // Simulate an API call
    return new Promise(resolve => setTimeout(() => resolve('API 1 result'), 1000));
}

async function fetchApi2() {
    // Simulate an API call
    return new Promise(resolve => setTimeout(() => resolve('API 2 result'), 1000));
}

async function concurrentRequests() {
    try {
        const [result1, result2] = await Promise.all([fetchApi1(), fetchApi2()]);
        console.log('Results:', result1, result2);
    } catch (error) {
        console.log('An error occurred:', error.message);
    }
}

// Example :
concurrentRequests();
