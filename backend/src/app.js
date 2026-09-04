import express from 'express'
import userauth from './routes/web/userauth.route.js'
import morgan from 'morgan';

const app=express()


app.use(express.json())


app.use("/api/web",userauth)






export default app
