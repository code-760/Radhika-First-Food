import express from 'express';
import userauth from './routes/web/userauth.route.js';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { envconfig } from './config/config.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use(cookieParser())

app.use(passport.initialize());
passport.use(
  new GoogleStrategy(
    {
      clientID: envconfig.GOOGLE_CLIENT_ID,
      clientSecret: envconfig.GOOGLE_CLIENT_SECRET,
      callbackURL: '/api/web/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    },
  ),
);

app.use('/api/web/auth', userauth);

export default app;
