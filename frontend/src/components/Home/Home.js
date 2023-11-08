import { useState, useEffect } from "react";

import Login from "../Login/Login";
import './Home.css';

export default function Home(props){  
    // localStorage.clear();
    const [isLoggedIn, setLoggedIn] = useState("false");

    useEffect(() => {
        setInterval(() => {
            const loginStatus = localStorage.getItem("loginStatus");
            setLoggedIn(loginStatus);
        }, [])
    }, 5000)

    if (!isLoggedIn || isLoggedIn === "false"){
        return(
            <div class="content">
                <h1>Event management System</h1>
                <Login/>
            </div>
        )

    }

    else{
        return(
            <div class = "content">
                <h1>Event management system</h1>
            </div>
            
        )
    }
    
}