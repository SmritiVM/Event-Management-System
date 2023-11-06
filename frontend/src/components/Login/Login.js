import { useState } from "react";

export default function Login(props){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    const handleClick = () => {
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("user", name);
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