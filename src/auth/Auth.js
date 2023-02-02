import React from "react";
import "./auth.css";

export default function Auth(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="sbmt button">
            <button type="submit" >
              Submit
            </button>
          </div>
          <p className="password">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
