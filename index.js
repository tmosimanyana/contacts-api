import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactsRouter from './routes/contacts.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(' Connected to MongoDB'))
    .catch(err => console.error(' Mongo connection error:', err));
} else {
  console.log('⚠️  No MONGO_URI provided — skipping MongoDB connection.');
}

app.use('/api/contacts', contactsRouter);
app.get('/', (req, res) => res.send('Contacts API is running'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
