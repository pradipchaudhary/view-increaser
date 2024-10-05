// models/viewModel.js

const urls = []; // Store URLs and their view count

const proxies = [
    "http://username:password@proxy1.com:8080", // Example Proxy 1
    "http://username:password@proxy2.com:8080", // Example Proxy 2
    "http://username:password@proxy3.com:8080", // Example Proxy 3
];

// Function to add a new URL
const addUrl = (url) => {
    urls.push({ url, views: 0 });
};

// Function to get all URLs
const getUrls = () => urls;

// Function to increase view count
const increaseViewCount = (url) => {
    const target = urls.find((item) => item.url === url);
    if (target) {
        target.views += 1;
    }
};

// Function to get a random proxy
const getRandomProxy = () => {
    return proxies[Math.floor(Math.random() * proxies.length)];
};

export { addUrl, getUrls, increaseViewCount, getRandomProxy };
