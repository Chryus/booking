import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// middlewares
app.use(cors());

if (process.env.NODE_ENV === 'dev') {
  app.use(morgan('dev'));
}

app.use(express.json());

// route middleware
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;
