import expees from 'express';
import { googleCallback, register } from '../../controller/web/userauth.controller.js';
import { validationLogin, validationRegister } from '../../validator/auth.validator.js';
import passport from 'passport';
import { envconfig } from '../../config/config.js';

const userauth=expees.Router()


userauth.post("/register",validationRegister,register)
userauth.post("/login",validationLogin,register)


userauth.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

userauth.get(
  '/google/callback',
  passport.authenticate('google', {
    session: false,
    failureRedirect: envconfig.NODE_ENV == 'development' ? 'http://localhost:5173/login' : '/login',
  }),
  googleCallback,
);




export default userauth


