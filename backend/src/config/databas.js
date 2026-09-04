import mongoose from "mongoose";
import {envconfig} from "./config.js";

const  conctedb=async()=>{
  await mongoose.connect(envconfig.MONGO_URI)
  console.log('MongoDB connected');
}

export default conctedb;
