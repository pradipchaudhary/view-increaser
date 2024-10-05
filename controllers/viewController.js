// controllers/viewController.js

import axios from "axios";
import { HttpsProxyAgent } from "https-proxy-agent";
import { getRandomProxy, increaseViewCount } from "../models/viewModel.js";

// Function to hit a URL with a random proxy and increase the view count
const hitUrl = async (url) => {
    try {
        const proxy = getRandomProxy(); // Select a random proxy
        const agent = new HttpsProxyAgent(proxy);

        await axios.get(url, {
            httpsAgent: agent,
        });

        // Increment the view count on successful request
        increaseViewCount(url);
        console.log(`Hit URL: ${url} using Proxy: ${proxy}`);
    } catch (error) {
        console.error(`Error hitting URL ${url}:`, error.message);
    }
};

export { hitUrl };
