import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import folktaleRoutes from './routes/folktales.js';
import adminRoutes from './routes/admin.js';
import path from 'path';

dotenv.config();
connectDB();

const app = express();            // ✅ must come first

const corsOptions = {
  origin: [
    "https://legendsansar.prahladsingh.in",
    "http://localhost:5173"
  ],
  credentials: true,
};

app.use(cors(corsOptions));       // ✅ now this is valid
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/folktales', folktaleRoutes);
app.use('/api/admin', adminRoutes);

// Server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
