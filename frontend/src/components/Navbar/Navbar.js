import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

import {BiSolidUserCircle} from "react-icons/bi";

import "./Navbar.css";

export default function Navbar(props){
    const [options, setOptions] = useState(
        <ul>
            <li><Link to = "#">Home</Link></li>
            <li><Link to = "#">About</Link></li>
            <li><Link to = "#">CONTACT US</Link></li>
        </ul>
    );
    const [user, setUser] = useState();

    useEffect(() => {
        setInterval(() => {
            const user = localStorage.getItem("user");
            setUser(user);
        }, [])
    }, 5000)
    
    const logout = () => {
        localStorage.setItem("loginStatus", false);
        return localStorage.removeItem("user");
    }

    if (user === "admin"){
        return(
            <nav class="navbar">
                <div class="icon"> 
                <h2 class="logo">VIT Chennai</h2>
                </div>
                <div class="menu">
                    <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "#">About</Link></li>
                    <li><Link to = "#">View Events</Link></li>
                    <li><Link to = "#">Create Event</Link></li>
                    <li><Link to = "#">View Users</Link></li>
                </ul>
                </div>
                <div class = "dropdown">
                    <button class = "dropbtn">
                        <BiSolidUserCircle className="usericon"/>
                        {user}
                    </button>
                    <div class = "dropdown-content">
                        <Link to = "#">Edit Profile</Link>
                        <Link to = "/" onClick={logout}>Logout</Link>
                    </div>
                    
                </div>
            
            </nav> 
        )
    }

    else if(user){
        return(
            <nav class="navbar">
                <div class="icon"> 
                <h2 class="logo">VIT Chennai</h2>
                </div>
                <div class="menu">
                    <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "#">About</Link></li>
                    <li><Link to = "#">Events</Link></li>
                </ul>
                </div>
                <div class = "dropdown">
                    <button class = "dropbtn">
                        <BiSolidUserCircle className="usericon"/>
                        {user}
                    </button>
                    <div class = "dropdown-content">
                        <Link to = "#">Edit Profile</Link>
                        <Link to = "/" onClick={logout}>Logout</Link>
                    </div>
                    
                </div>
            
            </nav> 
        )
    }
    else{
        return(
            <nav class="navbar">
                <div class="icon"> 
                <h2 class="logo">VIT Chennai</h2>
                </div>
                <div class="menu">
                    <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "#">About</Link></li>
                    <li><Link to = "#">CONTACT US</Link></li>
                </ul>
                </div>
                {/* <div class = "menu">
                    {profile}
                </div> */}
            
            </nav> 
        )
    }

    
    
    
}