const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")

router.post("/createPost",(req,res)=>{
    const{title,Body} = req.body;
    if(!title || !body){
        return res.status(422).json({error:"Please enter all the fields"})
    }
   else{res.json("OK")}
})
module.exports = router