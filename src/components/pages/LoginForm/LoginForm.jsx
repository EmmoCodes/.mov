import React from 'react'
import '../LoginForm/LoginForm.scss'
import { Link } from 'react-router-dom'
import google from '../../../assets/img/google.svg'
import facebook from '../../../assets/img/facebook.svg'
import twitter from '../../../assets/img/twitter.svg'
import logo from '../../../assets/img/njetflix.png'

function LoginForm() {
  return (
    <section className="login_form">
      <img src={logo} alt="" className="logo" />
      <p>Login</p>
      <form className="login_inputs">
        <label htmlFor="username_email"></label>
        <input type="text" name="username" id="username" placeholder="Username or Email..." />
        <label htmlFor="password"></label>
        <input type="text" name="password" id="password" placeholder="Password..." />
      </form>
      <div className="login_pw">
        <span>
          <Link to="/home">
            <button type="button">Login</button>
          </Link>
        </span>
        <span>
          <Link>Forgot your password?</Link>
        </span>
      </div>
      <div className="need_account">
        <p>Need an Account?</p>
        <div className="socialmedia">
          <img src={google} alt="" className="icon" />
          <img src={facebook} alt="" className="icon" />
          <img src={twitter} alt="" className="icon" />
        </div>
        <Link to="/register">
          <button type="button">Sign Up</button>
        </Link>
      </div>
    </section>
  )
}

export default LoginForm
