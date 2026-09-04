import expees from 'express';
import { register } from '../../controller/web/userauth.controller.js';
import { validationRegister } from '../../validator/auth.validator.js';

const userauth=expees.Router()


userauth.post("/register",validationRegister,register)



export default userauth


