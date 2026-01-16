import React, { useState } from "react";
import "./login.css";

function Login() {
  const [signin, setSignin] = useState("Sign In");
  return (
    <div className="login">
      <img src="./logo.png" alt="" className="form-logo" />
      <div className="login-form">
        <h2>{signin}</h2>
        <form action="">
          {signin === "Sign Up" ? (
            <input type="text" name="" id="" placeholder="Enter Name" />
          ) : (
            <></>
          )}
          <input type="email" name="" id="" placeholder="Email" />
          <input type="password" name="" id="" placeholder="Password" />
          <button>{signin==="Sign In"?"Sign In":"Sign Up"}</button>
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
