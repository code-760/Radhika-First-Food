import express from 'express';
import userauth from './routes/web/userauth.route.js';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use('/api/web/auth', userauth);

export default app;
