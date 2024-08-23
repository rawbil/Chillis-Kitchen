/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import "./Signup.css";
import { XSquare, Eye, EyeOff } from "react-feather";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../../Components/Context/AppContext";

const Signup = () => {
  const [heading, setHeading] = useState("Sign Up");
  const [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();

  const { url } = useContext(AppContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newUrl = url;
    {
      heading === "Sign Up"
        ? (newUrl += "/api/user/signup")
        : (newUrl += "/api/user/login");
    }
    try {
      const response = await axios.post(newUrl, data);
      if(response.data.success) {
        setData({
          name: "",
          email: "",
          password: ""
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-container">
      <form className="sign-form" onSubmit={handleSubmit}>
        <div className="form-top">
          <h2>{heading}</h2>
          <XSquare role="button" onClick={() => navigate("/")} />
        </div>
        <div className="form-input">
          {heading === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="your name"
              name="name"
              onChange={handleOnChange}
              value={data.name}
              required
            />
          )}

          <input
            type="email"
            id="email"
            placeholder="your email"
            name="email"
            onChange={handleOnChange}
            value={data.email}
            required
          />
          <div className="password-container">
            <input
              type={passwordShow ? "text" : "password"}
              id="password"
              name="password"
              onChange={handleOnChange}
              value={data.password}
              placeholder="your password"
              required
            />
            {passwordShow ? (
              <EyeOff onClick={() => setPasswordShow(false)} />
            ) : (
              <Eye onClick={() => setPasswordShow(true)} />
            )}
          </div>
        </div>
        <button type="submit" className="btn-login">
          {heading === "Sign Up" ? "Sign Up" : "Login"}
        </button>
        <div className="check">
          <input type="checkbox" id="check" required />
          <label htmlFor="check" className="save-password">
            save password
          </label>
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
