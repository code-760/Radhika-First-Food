import { envconfig } from "../../config/config.js";
import userModel from "../../models/user.model.js";
import jwt from "jsonwebtoken"

const  sendTokenResponse=async(data, res, message)=> {

  const token = jwt.sign(
    {
      id: data._id,
    },
    envconfig.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  );

  res.cookie('token', token);

  res.status(200).json({
    message,
    success: true,
    data: {
      id: data._id,
      email: data.email,
      contact: data.contact,
      fullname: data.fullname,
     
    },
  });
}

export const register = async (req, res) => {
  try {
    const {fullname, email, password, contact } = req.body;
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
        Success: false
      });
    }

    const data=await userModel.create({
      fullname:fullname,
      contact:contact,
      password:password,
      email:email
    })

    await sendTokenResponse(data, res, 'User registered successfully');

    res.status(200).json({
      message:"user successfully registered",
      success:true,
    })

    // Add user creation logic here if needed
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Something went wrong",
      Success: false,
      error: error.message
    });
  }
};

  
