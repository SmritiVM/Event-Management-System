import {Link} from "react-router-dom";

import "./Navbar.css";

export default function Navbar(){
    return(
        <nav class="navbar">
            <div class="icon"> 
            <h2 class="logo">VIT Chennai</h2>
            </div>
            <div class="menu">
                <ul>
                    <li><Link to = "#">Home</Link></li>
                    <li><Link to = "#">Events</Link></li>
                    <li><Link to = "#">CONTACT US</Link></li>
                </ul>
            </div>
        
        </nav> 
    )
}