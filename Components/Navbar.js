import React from 'react'
import "./Home.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
        <div className="topnav">
  <Link to="/">Home</Link>
  <Link to="/Chat">Chat</Link>
  <Link to="/Phone">Phone</Link>
  <Link to="/Meeting">Meetings</Link>
  <Link to="/Contacts">Contacts</Link>
  <Link to="/Login">Login</Link>
  <input id="search" type="text" placeholder="Search..."/>
  </div>
    </div>
  )
}
export default Navbar;