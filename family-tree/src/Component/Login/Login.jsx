import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    <div>
      <div className="main">
        <div className="left">
            <h1>Welcome to Family Tree</h1>
            <h1>Applicaion</h1>
        </div>
        <div className="right">
            <h3>Log in to your account</h3>
            <p>Welcome back! Please enter your details.</p>

            <div>
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" />
            </div>

            
            <div>
            <label htmlFor="password">Password</label><br />
            <input type="password" name="password" id="password" />
            </div>

            <div>
              <input type="checkbox" name="remember me" id="remember" />
              <label htmlFor="remember me">Remember Password</label>

              <a href="#">Forgot Password?</a>
            </div>

            <button>Log in</button>
            <button>Sign up</button>

        </div>
      </div>
    </div>
  )
}

export default Login
