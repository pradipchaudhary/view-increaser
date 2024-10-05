import express, { json } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import serveFavicon from "serve-favicon"; // Import serve-favicon middleware
import viewRoutes from "./routes/viewRoutes.js";

dotenv.config();

const app = express();

// Fix for __dirname with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Serve favicon
app.use(serveFavicon(path.join(__dirname, "public", "favicon.ico")));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "ejs");

// Routes
app.use("/", viewRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
