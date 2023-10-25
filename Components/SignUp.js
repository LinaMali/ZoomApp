import "./Login.css";
// import { useState,useEffect } from "react";
import user_icon from "../assets/user.png";
import email_icon from "../assets/email.png";
import pass_icon from "../assets/lock.png";
import { useState } from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";
const Login=()=>{
  const history=useNavigate();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  async function submit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:3000/SignUp",{
        email,password
      })
      .then(res=>{
        if(res.data==="exist"){
          alert("User already exists")
        
        }
        else if(res.data==="not exist"){
         history("Home",{state:{id:email}})
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
  








// const initialValues={username: "", email: "", password: ""};
// const [formVlaues, setFormValue]=useState(initialValues);
// const [formErrors, setFormErrors]=useState({});
// const [issubmit,setIsSubmit]=useState(false);

// const handleChange=(e)=>{
//   const {name,value}=e.target;
//   setFormValue({...formVlaues,[name]:value});
// };

// const handleSubmit=(e)=>{
// e.preventDefault();
// setFormErrors(validate(formVlaues));
// setIsSubmit(true);
// };
// useEffect(()=>{
//   console.log(formErrors);
// if(Object.keys(formErrors).length===0 && issubmit){
//   console.log(formVlaues);
// }
// },[formErrors])
// const validate=(values)=>{
// const error={};
// const regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
// if(!values.username){
//   error.username="Username is Required";
// }
// if(!values.email){
//   error.email="Email is Required";
// }else if(!regex.test(values.email)){
//   error.email="This is not a valid Email format!";
// }
// if(!values.password){
//   error.password="Password is Required";
// }else if(values.password.length<4){
//   error.password="Password must be more than 4 characters";
// }else if(values.password.length>10){
//   error.password="Password can not exceed more than 10 characters";
// }
// return error;
// }
  return(
    <div className="container">
      {/* {Object.keys(formErrors).length===0 && issubmit ? (<div className="ui message success">SignUp Successfully.</div>)
     :( <pre>{JSON.stringify(formVlaues,undefined,2)}</pre>)} */}
      {/* <form onSubmit={handleSubmit}> */}
      
      <form action="Post">
      <div className="header">
      <div className="text">Sign Up</div>
      <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img id="img1" src={user_icon} alt=""/>
          <input type="text"
           name="username" 
           placeholder="Name" onChange={(e)=>{setEmail(e.target.value)}}/>
            {/* value={formVlaues.username} 
            onChange={handleChange}/> */}
        </div>
        {/* <p>{formErrors.username}</p> */}
        <div className="input">
          <img id="img1" src={email_icon} alt=""/>
          <input type="email"
           name="email"
            placeholder="Email Id" onChange={(e)=>{setEmail(e.target.value)}}/>
             {/* value={formVlaues.email}
             onChange={handleChange}/> */}
        </div>
        {/* <p>{formErrors.email}</p> */}
        <div className="input">
          <img id="img1" src={pass_icon} alt=""/>
          <input type="password"
           name="password" 
           placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/> 
           {/* value={formVlaues.password}
           onChange={handleChange}/> */}
        </div>
        {/* <p>{formErrors.password}</p> */}
      </div>
      <div className="submit-container">
        <div><input type="submit" className="submit" name="submit" value="Sign Up" onClick={submit}/>
        <div><b><Link to="/SignUp">Login</Link></b></div>
        </div>
      </div>
      </form>
    </div>
  )
}
export default Login;