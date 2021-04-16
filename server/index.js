import app from './server.js';
import { connectDB } from './config/db.js';

connectDB();

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
