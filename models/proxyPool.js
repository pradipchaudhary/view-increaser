// proxyPool.js

// Sample proxy list (you can replace these with real proxies or use a service)
const proxyPool = [
    { host: "123.45.67.89", port: 8080 },
    { host: "98.76.54.32", port: 3128 },
    { host: "203.0.113.101", port: 1080 },
    // Add more proxies here
];

let currentProxyIndex = 0;

// Function to get the next proxy in the list
const getNextProxy = () => {
    const proxy = proxyPool[currentProxyIndex];
    currentProxyIndex = (currentProxyIndex + 1) % proxyPool.length;
    return proxy;
};

export { getNextProxy };
