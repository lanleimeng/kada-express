import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import noteRoutes from "../routes/note.routes.js";
import errorHandler from "../middlewares/error.middleware.js";
app.use(cors());



dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/notes", noteRoutes);


app.use(errorHandler);

export default app; 