import React from 'react'
import './Login.css'
import loginpng from './log.png';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const gotoNewPage = () =>{
      navigate("/Home");
    }

  return (
    <div className='main'>
      <div className="center-container">
        <div className="box-container">
          <div className="image-container">
            <img src={loginpng} alt="Fashion Models" />
          </div>
          <div className="form-container">
            <h2>Sign In</h2>
            <p>Sign in to continue shopping</p>
            <form>
              <label>
                Email *
                <label className="use-phone">
                  Use Phone Instead
                </label>
                <input type="email" required />
              </label>
              <label>
                Password *
                <input type="password" required />
              </label>
              <div className="form-options">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a href="#" className="forgot-password">Forgot Password</a>
              </div>
              <button type="submit" className="sign-in-btn" onClick={ () => gotoNewPage()}>Sign In</button>
            </form>
            <p>Don't have an account? <a href="#" className="sign-up">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}