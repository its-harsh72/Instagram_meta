import React,{useEffect,useState} from "react";
import Logo from "../Images/Logo.png";
import "./SignUp.css";
import { buildQueries } from "@testing-library/react";
import { Link , useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';



export default function SignUp(){
    const navigate =  useNavigate()
    const [name , setName] = useState("");
    const [username , setUserName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const notifyA = (msg)=>toast.success(msg)
    const notifyB = (msg)=>toast.error(msg)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    
    const postData = ()=>{
        // mail validation
        if(!emailRegex.test(email)){ return notifyB("Invalid Email")}
        if(!passwordRegex.test(password)){ return notifyB("Password must contain minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character")}

      //sending Data
      fetch("http://localhost:5000/SignUp",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,
            userName:username,
            email:email,
            password:password

        })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
         notifyB(data.error)
        }
        else{
            notifyA(data.message)
            navigate("/SignIn")
        console.log(data.message)
        }
        })
    }
    return(
        <div className="signUp">
            <div className="form-container">
                <div className="form">
                <img className="signUpLogo" src={Logo} alt=""/>
                <p className="loginPara">
                Sign up to see photos and videos from your friends.
                </p>
                <div>
                <input type="text" name="name" id="name" value = {name}  placeholder="Name" onChange={(e)=>{
                    setName(e.target.value)
                }}/>
            </div>
            <div>
                <input type="email" name="email" id="email" value = {email} placeholder="Email"  onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
            </div>
           
            <div>
                <input type="text" name="username" id="username" value = {username}  placeholder="Username" onChange={(e)=>{
                    setUserName(e.target.value)
                }}/>
            </div>
            <div>
                <input type="password" name="password" id="password" value = {password}  placeholder="Password" onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
            </div>
            <p className="BeforeLoginPara">
            People who use our service may have uploaded your contact information to Instagram. Learn More
            </p>
            <p className="LoginPara" style={{fontSize: "12px", margin: "3px 0px"}}>
            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .

            </p>
             <input type="submit" id="submit-btn" value="Sign Up" onClick={()=>{
                postData()
             }}/>
            </div>
           
            <div className="form2">
                    Already have an account? <Link to="/signin"><span style={{color :"blue",cursor:"pointer"}}>Sign In</span></Link>
                </div>
                
                </div>
                
        </div>
    )   
}