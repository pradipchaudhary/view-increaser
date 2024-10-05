// routes/viewRoutes.js

import express from "express";
import { addUrl, getUrls } from "../models/viewModel.js";
import { hitUrlWithProxy } from "../controllers/viewController.js";
import schedule from "node-schedule";

const router = express.Router();

// Render form to add URL and show current hit count
router.get("/", (req, res) => {
    res.render("form", { urls: getUrls(), title: "Home Page" });
});

// Handle form submission and schedule URL hits every 30 seconds
router.post("/add-url", (req, res) => {
    const { url } = req.body;
    addUrl(url);

    // Schedule a job to hit the URL every 30 seconds using rotating proxies
    schedule.scheduleJob(`*/30 * * * * *`, () => {
        hitUrlWithProxy(url);
    });

    res.redirect("/");
});
export default router;
