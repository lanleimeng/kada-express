import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/email.js";

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      password: hashedPassword,
    });
     

    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
     const token = jwt.sign(
    { id: user.id, role: user.role }, 
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );
 
   await sendEmail({
      to: user.email,
      subject: "Welcome to My App! 🎉",
      text: `Hi , welcome to My App!`,
      html: `<h1>Hi , welcome to My App!</h1><p>We are excited to have you.</p>`,
    })

    res.json({ message: "Login successful" ,token:token});
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};