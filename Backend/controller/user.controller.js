import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcryptjs.hash(password, 10);
        const newUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        });

        await newUser.save();
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            }
        });
    } catch (error) {
        console.log("Error", error.message);
        return res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            return res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        return res.status(500).json({ message: `Internal Server Error: ${error.message}` });
    }
};