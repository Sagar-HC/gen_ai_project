import React from "react";
import "../auth.form.scss";
import {Link ,useNavigate} from "react-router"

export default function Login(){
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    
                   <div className="input-grp">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" />
                   </div>
                   <div className="input-grp">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <button className="button primary-button">Login</button>
                </form>
                
                 <p>dont have an account?<Link to={"/register"}>Register</Link></p>
                
            </div>
        </main>
    )
}