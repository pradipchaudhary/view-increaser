import express, { json } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import schedule from "node-schedule";
import viewRoutes from "./routes/viewRoutes.js";
import { getUrls } from "./models/viewModel.js";
import { hitUrl } from "./controllers/viewController.js";
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Routes
app.use("/", viewRoutes);

// Schedule task to hit each URL every minute
schedule.scheduleJob("*/1 * * * *", () => {
    const urls = getUrls();
    urls.forEach((item) => hitUrl(item.url));
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
