import express, { json } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import schedule from "node-schedule";
import viewRoutes from "./routes/viewRoutes.js";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Routes
app.use("/", viewRoutes);

// Schedule task to generate a random URL and hit it every minute
// schedule.scheduleJob("*/1 * * * *", () => {
//     const randomUrl = generateRandomUrl();
//     addUrl(randomUrl);
//     hitUrl(randomUrl);
//     console.log(`Generated and hit URL: ${randomUrl}`);
// });

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
