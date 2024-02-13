const express = require("express")
const app = express()
app.use(express.json())

const dotenv = require("dotenv")
dotenv.config()

const middleware = require("./GlobalMiddleware/GlobalMiddleware")
app.use(middleware)

const routes = require("./Routes/Routes")
app.use("/api/routes", routes)

 


const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})
