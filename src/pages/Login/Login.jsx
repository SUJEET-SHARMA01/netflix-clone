import React, { useState } from "react";
import "./login.css";
import {SignUp, LoginAuth} from "../../firebase"
import netflix_spinner from "../../assets/netflix_spinner.gif"

function Login() {
  const [signin, setSignin] = useState("Sign In");
  const [name,setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading,setLoading] = useState(false)
  
  const user_auth = async(e)=>{
    e.preventDefault()
    setLoading(true)
    if(signin==="Sign In"){
      await LoginAuth(email, password)
    }
    else{
      await SignUp(name, email, password)
    }
    setLoading(false)
  }


  return (
    loading? <div className="loading-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src="./logo.png" alt="" className="form-logo" />
      <div className="login-form">
        <h2>{signin}</h2>
        <form action="">
          {signin === "Sign Up" ? (
            <input type="text" name="" id="" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          ) : (
            <></>
          )}
          <input type="email" name="" id="" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" name="" id="" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={user_auth} type="submit">{signin==="Sign In"?"Sign In":"Sign Up"}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signin === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={()=>setSignin("Sign Up")}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have Account? <span onClick={()=>setSignin("Sign In")}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
