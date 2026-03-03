import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/note.routes.js";
import errorHandler from "./middlewares/error.middleware.js";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js"
import { authenticateToken } from "./middlewares/auth.middleware.js";
import { iatChecker } from "./middlewares/iat.checker.middleware.js";



dotenv.config();
connectDB();

const app = express();

app.use(cors({origin:"*"}));

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api", [authenticateToken, iatChecker]);
app.use("/api/notes",noteRoutes);




app.use(errorHandler);


app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});

export default app; 