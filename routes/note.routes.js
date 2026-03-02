import express from "express";
import {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
} from "../controllers/note.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";



const router = express.Router();
router.use(authenticateToken);




router.get("/", getNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;