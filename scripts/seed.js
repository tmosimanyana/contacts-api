import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Contact from "../models/Contact.js";

dotenv.config();
const dataPath = path.resolve("data", "contacts.json");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const raw = fs.readFileSync(dataPath);
    const contacts = JSON.parse(raw);
    await Contact.deleteMany({});
    await Contact.insertMany(contacts);
    console.log(" Database seeded with contacts");
    process.exit(0);
  })
  .catch(err => {
    console.error(" Seed error:", err);
    process.exit(1);
  });
