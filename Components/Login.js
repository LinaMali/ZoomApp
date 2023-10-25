// import React, { useState } from "react";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import {useNavigate, Link } from "react-router-dom";
import email_icon from "../assets/email.png";
import pass_icon from "../assets/lock.png";
const Login=()=>{
const history=useNavigate();
// const [action /*,setAction*/]= useState("sign In");

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

async function submit(e){
  e.preventDefault();

  try{

    await axios.post("http://localhost:3000/",{
      email,password
    })
   .then(res=>{
    if(res.data==="exist"){
      history("/Home",{state:{id:email}})
    }
    else if(res.data==="not exist"){
     alert("User have not sign up");
    }
   })
   .catch(e=>{
    alert("Wrong details")
    console.log(e);
   })
  }
  catch(e){
   console.log(e);
  }
}

  return(
    <form action="Post">
    <div className="container">
      <div className="header">
      <div className="text">Sign In</div>
      <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img id="img1" src={email_icon} alt=""/>
          <input type="email" placeholder="Email Id" onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="input">
          <img id="img1" src={pass_icon} alt=""/>
          <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
      </div>
      <div className="forgot-password">Forgot Password?</div>
      <div className="submit-container">
        <div><input type="submit" className="submit" Value="sign In" onClick={submit}/>
        <div className="text3">If you are not Register. Please <b><Link to="/SignUp"> Sign Up</Link></b></div>
        </div>
      </div>
    </div>
    </form>
  )
}
export default Login;