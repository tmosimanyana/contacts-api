import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactsRouter from "./routes/contacts.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/contacts", contactsRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err));
