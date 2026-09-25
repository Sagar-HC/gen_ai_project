import React,{useState} from "react";
import "../auth.form.scss";
import {Link ,useNavigate} from "react-router"
import { useAuth } from "../hooks/useAuth";

export default function Login(){
    const{loading,handleLogin} = useAuth()
    const navigate = useNavigate();

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await handleLogin({email,password})
        navigate("/");
    }
    if(loading){
            return(<main><h1>faaaaaaaaaaaahh</h1></main>)
    }
    return(
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    
                   <div className="input-grp">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)
                    }} type="email" name="email" id="email" placeholder="Enter your Email" />
                   </div>
                   <div className="input-grp">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <button className="button primary-button">Login</button>
                </form>
                
                 <p>dont have an account?<Link to={"/register"}>Register</Link></p>
                
            </div>
        </main>
    )
}