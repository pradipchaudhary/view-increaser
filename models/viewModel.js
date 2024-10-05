// models/viewModel.js
const urls = []; // Store URLs and their hit counts

// Function to add a new URL
const addUrl = (url) => {
    urls.push({ url, views: 0 });
};

// Function to get all URLs
const getUrls = () => urls;

// Function to increase the view count
const increaseViewCount = (url) => {
    const target = urls.find((item) => item.url === url);
    if (target) {
        target.views += 1;
    }
};

export { addUrl, getUrls, increaseViewCount };
