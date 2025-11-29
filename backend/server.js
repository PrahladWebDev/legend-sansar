import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import folktaleRoutes from './routes/folktales.js';
import adminRoutes from './routes/admin.js';
import path from "path";

dotenv.config();
connectDB();


const corsOptions = {
   origin: [
    "https://legendsansar.prahladsingh.in",
    "http://localhost:5173"
  ],
  credentials: true,
};
app.use(cors(corsOptions));


const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/folktales', folktaleRoutes);
app.use('/api/admin', adminRoutes);


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
