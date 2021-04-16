import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/auth.js';

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));

// route middleware
app.use('/api', router);

export default app;
