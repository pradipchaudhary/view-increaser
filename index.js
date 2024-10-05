import express, { json } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import viewRoutes from "./routes/viewRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// Routes
app.use("/", viewRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
