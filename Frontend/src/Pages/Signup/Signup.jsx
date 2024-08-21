/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "./Signup.css";
import { XSquare, Eye, EyeOff } from "react-feather";
import {  useNavigate } from "react-router-dom";

const Signup = () => {
  const [heading, setHeading] = useState("Sign Up");
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate()
  return (
    <div className="sign-container">
      <form className="sign-form">
        <div className="form-top">
          <h2>{heading}</h2>
            <XSquare role="button" onClick={() => navigate('/')}/>
          
        </div>
        <div className="form-input">
          {heading === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="your name" required />
          )}

          <input type="email" id="email" placeholder="your email" required/>
          <div className="password-container">
            <input
              type={passwordShow ? "text" : "password"}
              id="password"
              placeholder="your password" required
            />
            {passwordShow ? (
              <EyeOff onClick={() => setPasswordShow(false)} />
            ) : (
              <Eye onClick={() => setPasswordShow(true)} />
            )}
          </div>
        </div>
        <button className="btn-login">
          {heading === "Sign Up" ? "Sign Up" : "Login"}
        </button>
        <div className="check">
          <input type="checkbox" id="check" required/>
          <label htmlFor="check" className="save-password">save password</label>
        </div>
        <div className="switch">
          {heading === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span onClick={() => setHeading("Login")}>Login</span>
            </p>
          ) : (
            <p>
              don't have an account?
              <span onClick={() => setHeading("Sign Up")}>sign up</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Signup;
