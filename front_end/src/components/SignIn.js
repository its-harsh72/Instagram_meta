import React,{useEffect,useState} from "react";
import Logo from "../Images/Logo.png"
import "./signin.css";
import { Link, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';

export default function SignIn(){
    const navigate =  useNavigate()
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const notifyA = (msg)=>toast.success(msg)
    const notifyB = (msg)=>toast.error(msg)


    const postData = ()=>{
        // mail validation
        if(!emailRegex.test(email)){ return notifyB("Invalid Email")}
        

      //sending Data
      fetch("http://localhost:5000/signin",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
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
            navigate("/")
        console.log(data.message)
        }
        })
    }

    return(
        <div className="Signin">
            <div>
                <div className="loginForm">
                    <img className="signUpLogo" src={Logo} alt=""/>

                    <div>
                        <input type="email" name="email" id = "email" placeholder="Email"  value={email} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }} onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                    </div>
                    <div>
                        <input type="password" name="password" id = "password" placeholder="Password" value={password} style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(10px)' }} onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                    </div>
                    <div>
                        <input type="submit" id = "login-btn" value="Sign In"  placeholder="Password"style={{ backgroundColor: '#1773ea',color: 'white' }} onClick={()=>{postData()
                        }}/>
                    </div>
                    
                       

                        </div>
                        <div className="loginForm2">
                        Don't have an account? 
                        <Link to = "/signup">
                        <span style={{color:"#1773ea", cursor:'pointer', textDecorationStyle:'bold'}}>
                            Log in
                        </span>
                        </Link>
                </div>
            </div>
        </div>
    )
}