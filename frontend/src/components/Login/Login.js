import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Login(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const handleClick = () => {
        if (!password){
            alert("Password cannot be empty");
            return;
        }

        if (name === "admin" && password === "123"){
            localStorage.setItem("loginStatus", true);
            localStorage.setItem("user", name);
            alert("Welcome admin");
        }

        else{
        Axios.get("https://eventhub-t514.onrender.com/eventRoute/check-user/" + name)
        .then((res) => {
            if(res.status === 200)
            {   
                if(res.data != null)
                {
                    if(res.data.password === password){
                        localStorage.setItem("loginStatus", true);
                        localStorage.setItem("user", name);
                        localStorage.setItem("userID", res.data._id);
                        console.log(localStorage.getItem("userID"));
                    
                    }
                    else
                        alert("Incorrect username or password");
                    
                }
                else
                    alert("Incorrect username or password");     
            }
            else
                Promise.reject();
        })
        .catch((err) => alert(err));
    
        }
    }
    
    return(
        <div class="form">
                    <h2>Login</h2>
                    <input onChange = {(event) => setName(event.target.value)} type="text" name="uname" placeholder="Enter Username Here"/>
                    <input onChange = {(event) => setPassword(event.target.value)} type="password" name="" placeholder="Enter Password Here"/>
                    <button class="btnn" onClick = {handleClick} type = "submit"><a href="#">Login</a></button>

                    <p class="link">Don't have an account?<br/>
                    <Link to ="/register">Sign up </Link> here</p>
                    

        </div>
    )
}