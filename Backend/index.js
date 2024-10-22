import express from 'express';
import bookRoute from './route/book.routes.js';
import userRoute from './route/user.routes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();
const app = express();
const URI = process.env.MongoDBURI;
const PORT = process.env.PORT || 4000;

// Enable CORS middleware before defining routes
app.use(cors(
    {
        origin :["https://deploy-mern-1whq.vercel.app"],
        methods :["GET", "POST"],
        credentials :true
    }
));
app.use(express.json());

// Connection to MongoDB
mongoose.connect(URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('Error:', error));

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Deployment for production
if (process.env.NODE_ENV === 'production') {
    const dirPath = path.resolve();
    app.use(express.static(path.join(dirPath, "Frontend", "dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(dirPath, "Frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
