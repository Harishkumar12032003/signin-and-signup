import React from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate("/auth");
      }
    
  return (
    <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered ?{" "}
              <span className="link-primary" onClick={routeChange}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="sbmt button">
            <button type="submit" >
              Submit
            </button>
          </div>
          {/* <p className="password">
            Forgot <a href="#">password?</a>
          </p> */}
          </div>
        </form>
      </div>
    )
  }