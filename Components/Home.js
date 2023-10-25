import React from 'react';
// import { Link } from "react-router-dom";
import join from "../assets/join.png";
import newmeet from "../assets/newmeet.png"; 
import schedule from "../assets/schedule.png";
import screenshare from "../assets/screenshare.png";
import { useState , useEffect } from 'react'
import "./Home.css";
import { useLocation} from 'react-router-dom';
export const DateTime = () => {

const location=useLocation()

  var [date,setDate] = useState(new Date());
  
  
  useEffect(() => {
      var timer = setInterval(()=>setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  
  });
  return (
    <div>
{/* <div className="topnav">
  <Link to="/Home">Home</Link>
  <Link to="/Chat">Chat</Link>
  <Link to="/Phone">Phone</Link>
  <Link to="/Meeting">Meetings</Link>
  <Link to="/Contacts">Contacts</Link>
  <Link to="/Login">Login</Link>
  <input id="search" type="text" placeholder="Search..."/>
  </div> */}
<div className="home">
    <img src={newmeet} className='img1' alt="NewMeet"/>
    <img src={join} className='img2' alt="JoinMeet"/>
    <table>
    <tr>
        <th>New Meeting</th>
        <th> &nbsp; &nbsp;&nbsp;Join</th>
    </tr>
   </table><br/>
    <img src={schedule} className='img3' alt="Schedule"/>
    <img src={screenshare} className='img4' alt="screenshare"/>
    <table className='text1'>
    <tr>
        <th>Schedule&nbsp; &nbsp;&nbsp;</th>
        <th>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Share Screen</th>
    </tr>
   </table>
    </div>
    <div className='datetime'>
            <p className='date1'>{date.toLocaleTimeString()}</p>
            <p className='date2'>{date.toLocaleDateString()}</p>

        </div>
        <div className='calender'>
        
        </div>


<h1>Hello {location.state.id} and welcome to home</h1>

        </div>
    );
};

export default DateTime;
