import { useState, useEffect } from "react";

import Login from "../Login/Login";
import './Home.css';

export default function Home(props){  
    const [isLoggedIn, setLoggedIn] = useState();

    useEffect(() => {
        setInterval(() => {
            const loginStatus = localStorage.getItem("loginStatus");
            setLoggedIn(loginStatus);
        }, [])
    }, 5000)

    if (isLoggedIn === "false"){
        return(
            <div class="content">
                <h1>Event managment System</h1>
                <Login/>
            </div>
        )

    }

    else{
        return(
            <div class = "content">
                <h1>Event managment system</h1>
            </div>
            
        )
    }

    
}