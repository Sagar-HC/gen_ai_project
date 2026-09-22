import React from "react";
import {Link ,useNavigate} from "react-router"
const Register = () =>{
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-grp">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter username" />
                   </div>

                   <div className="input-grp">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" />
                   </div>

                   <div className="input-grp">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <button className="button primary-button">Register</button>
                </form>
                <p>Have an account?<Link to={"/login"}>Login</Link></p>
                
                
            </div>
        </main>
    );

}

export default Register