
import './Home.css';

export default function Home(){
    return(
        <div class="content">
            <h1>Event managment System</h1>
            
               <button class="cn"><a href="#">Register</a></button>

                <div class="form">
                    <h2>Login</h2>
                    <input type="email" name="email" placeholder="Enter Email Here"/>
                    <input type="password" name="" placeholder="Enter Password Here"/>
                    <button class="btnn"><a href="#">Login</a></button>

                    <p class="link">Don't have an account?<br/>
                    <a href="#">Sign up </a> here</p>
                    <p class="liw">Log in with</p>

                    <div class="icons">
                        <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                    </div>

                </div>
        </div>


    )
}