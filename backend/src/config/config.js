import dotenv, { config } from "dotenv"
dotenv.config()

if (!process.env.MONGO_URI){
  console.log("MONGO_URI IS NOT AVAILABLE IN .ENV FILE")
}
  export const envconfig = {
    MONGO_URI: process.env.MONGO_URI,
  };
