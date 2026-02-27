import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/note.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import cors from "cors";




dotenv.config();
connectDB();

const app = express();

app.use(cors({origin:"*"}));



app.use(express.json());

app.use("/", noteRoutes);


app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app; 