import userModel from "../../models/user.model.js";

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

    console.log(data)

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

  
