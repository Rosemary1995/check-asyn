async function fetchUrl(url) {
    // Simulate fetching data from a URL
    return new Promise(resolve => setTimeout(() => resolve(`Data from ${url}`), 1000));
}

async function parallelCalls(urls) {
    try {
        const responses = await Promise.all(urls.map(url => fetchUrl(url)));
        console.log('Responses:', responses);
    } catch (error) {
        console.log('An error occurred:', error.message);
    }
}

// Example usage:
parallelCalls(['https://api.com/data1', 'https://api.com/data2']);
