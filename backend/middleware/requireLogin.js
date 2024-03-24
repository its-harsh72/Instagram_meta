const jwt = require("jsonwebtoken")
const {jwt_secret} = require("../key")
const mongoose = require("mongoose")
const USER = mongoose.model("USER")
module.exports = (req, res, next)=>{
    const {authorization}= req.headers;
    if(!authorization){
        return res.status(401).json({error:"you must have logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token, jwt_secret,(error, payload)=>{
if(error){
    return res.status(401).json({error:"you must have logged in"})
}
const{_id}=payload
USER.findById(_id).then(userData=>{
    console.log(userData)
})
    })
    next()
}