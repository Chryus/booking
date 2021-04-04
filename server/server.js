import express from 'express';
import router from './routes/auth.js';

const app = express();

// route middleware
app.use('/api', router);

export default app;
