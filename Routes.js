const express = require("express")
const router = express.Router()


router.get("/", (req,res)=>{
    res.json("Hello world!")
})  

router.get("/getUsers", (req,res)=>{
    res.json("GET request method")
})

router.post("/postUsers", (req,res)=>{
    res.json("POST request method")
})




module.exports = router