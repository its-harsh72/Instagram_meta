const express = require("express");
const {jwt_secret} = require("../key");
const router = express.Router();
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const USER = mongoose.model("USER")
const jwt = require("jsonwebtoken");
const requireLogin = require("../middleware/requireLogin");

router.get("/",(req,res)=>{
    res.send("Hello Insta")
})

router.post('/SignUp',(req,res)=>{
   const{name,userName,email,password}= req.body;
   if(!name || !userName || !email|| !password){
   return  res.status(405).json({error:"Please add all the feilds"})
   }
   USER.findOne({$or:[{email:email},{userName:userName}]}).then((savedUser)=>{
    if(savedUser){
        return res.status(422).json({ error:"User Already Exist "})
    }
    bcrypt.hash(password, 12).then((hashedPassword)=>{
        const user = new USER({
            name,
            email,
            userName,
            password :hashedPassword
           })
            user.save()
                .then(user => {
                    res.json({ message: "Registered Successfully" });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ error: "Failed to save user" });
                });
    })
   })
})
   //----------------- SignIn ---------------->
router.post("/signin",(req,res)=>{
    const {email, password}= req.body;
    if(!email || !password){return res.status(422).json({error:"Please provide email and passowrd"})}
    USER.findOne({email:email}).then((savedUser)=>{
        if(!savedUser){return res.status(422).json({error:"Invalid mail"})}
        bcrypt.compare(password,savedUser.password)
        .then((match)=>{
            if(match){
                const token = jwt.sign({_id:savedUser.id},jwt_secret)
                res.json(token);
                console.log("token",token)
                //return res.status(200).json({message:"Signed in successfully"})
            }
            else{
                return res.status(422).json({error:"Invalid password"})
            }
        })
        .catch(err=>console.log(err))
    console.log(savedUser)
})

});
module.exports= router;