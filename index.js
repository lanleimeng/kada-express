import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/note.routes.js";


dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use("/api/notes", noteRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});