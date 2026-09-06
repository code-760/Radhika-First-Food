import dotenv, { config } from "dotenv"
dotenv.config()

if (!process.env.MONGO_URI){
 throw new Error("MONGO_URI IS NOT AVAILABLE IN .ENV FILE")
}
if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET IS NOT AVAILABLE IN .ENV FILE');
}
if (!process.env.GOOGLE_CLIENT_ID) {
throw new Error('GOOGLE_CLIENT_ID IS NOT AVAILABLE IN .ENV FILE');
}
if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new Error('GOOGLE_CLIENT_SECRET IS NOT AVAILABLE IN .ENV FILE');
}

  export const envconfig = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NODE_ENV: process.env.NODE_ENV == 'development',
  };
