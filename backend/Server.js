import app from "./src/app.js"
import conctedb from "./src/config/databas.js"

conctedb()


app.listen("3000",()=>{
  console.log("server start port 3000")
})
