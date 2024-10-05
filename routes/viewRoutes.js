// routes/viewRoutes.js

import express from "express";
import { addUrl, getUrls } from "../models/viewModel.js";
import { hitUrl } from "../controllers/viewController.js";
const router = express.Router();

// Form to add URL
router.get("/", (req, res) => {
    res.render("form", { urls: getUrls() });
});

// Handle form submission
router.post("/add-url", (req, res) => {
    const { url } = req.body;
    addUrl(url);
    res.redirect("/");
});

// Endpoint to trigger hitting the URL (for testing purposes)
router.get("/hit-url/:url", (req, res) => {
    const url = req.params.url;
    hitUrl(url);
    res.send(`Hitting URL: ${url}`);
});
export default router;
