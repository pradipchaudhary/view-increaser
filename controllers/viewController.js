// controllers/viewController.js

import axios from "axios";
import { increaseViewCount } from "../models/viewModel.js";
import { getNextProxy } from "../models/proxyPool.js";

// Function to hit a URL using a proxy and increase the view count
const hitUrlWithProxy = async (url) => {
    const proxy = getNextProxy(); // Get the next proxy from the pool

    const config = {
        proxy: {
            host: proxy.host,
            port: proxy.port,
        },
        timeout: 10000, // Optional: Set a timeout to handle slow or unreachable proxies
    };

    try {
        await axios.get(url, config); // Make the request with the proxy
        increaseViewCount(url); // Increase the view count
        console.log(`Hit URL: ${url} from IP: ${proxy.host}`);
    } catch (error) {
        console.error(
            `Error hitting URL ${url} via proxy ${proxy.host}:`,
            error.message
        );
    }
};
export { hitUrlWithProxy };
