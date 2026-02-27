import Note from "../models/post.model.js";

// CREATE
export const createNote = async (req, res, next) => {
    try {
        const { title, content, author } = req.body;

        if (!title || !content ||!author) {
            return res.status(400).json({
                message: "Title and content are required",
            });
        }

        const note = await Note.create({ title, content, author });

        res.status(201).json(note);
    } catch (error) {
        next(error);
    }
};

// GET ALL
export const getNotes = async (req, res, next) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        next(error);
    }
};

// GET BY ID
export const getNoteById = async (req, res, next) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }

        res.json(note);
    } catch (error) {
        next(error);
    }
};

// UPDATE
export const updateNote = async (req, res, next) => {
    try {
        const note = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }

        res.json(note);
    } catch (error) {
        next(error);
    }
};

// DELETE
export const deleteNote = async (req, res, next) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({
                message: "Note not found",
            });
        }

        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        next(error);
    }
};