import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRouts.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  // Use absolute path to avoid any issues
  const staticPath = "C:/Users/madus/OneDrive/Documents/React/MERN/Frontend/dist";
  console.log("Static files directory:", staticPath);
  app.use(express.static(staticPath));

  app.get("*", (req, res) => {
    const indexPath = "C:/Users/madus/OneDrive/Documents/React/MERN/Frontend/dist/index.html";
    console.log("Index HTML path:", indexPath);
    res.sendFile(indexPath);
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});