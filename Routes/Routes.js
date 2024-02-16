const express = require("express")
const router = express.Router()


router.get("/", (req,res)=>{
    res.json({msg:"Hello world!"})
})  


router.get("/getUsers", (req,res)=>{
    res.json({msg:"GET request method"})
})


router.post("/postUsers", (req,res)=>{
    res.json({msg:"POST request method"})
})



module.exports = router