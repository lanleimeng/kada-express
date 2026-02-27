import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/note.routes.js";
import errorHandler from "./middlewares/error.middleware.js";




dotenv.config();
connectDB();

const app = express();



app.use(express.json());

app.use("/api/notes", noteRoutes);


app.use(errorHandler);

export default app; 