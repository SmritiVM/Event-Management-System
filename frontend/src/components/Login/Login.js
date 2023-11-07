import { useState } from "react";
import Axios from "axios";

export default function Login(props){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const handleClick = () => {
        if (!password){
            alert("Password cannot be empty");
        }

        if (name === "admin" && password === "123"){
            localStorage.setItem("loginStatus", true);
            localStorage.setItem("user", name);
            alert("Welcome admin");
        }

        else{
        Axios.get("http://localhost:4000/eventRoute/check-user/" + name)
        .then((res) => {
            if(res.status === 200)
            {   
                if(res.data != null)
                {
                    if(res.data.password === password){
                        localStorage.setItem("loginStatus", true);
                        localStorage.setItem("user", name);
                    
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
                    <a href="#">Sign up </a> here</p>
                    

        </div>
    )
}