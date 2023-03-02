import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css' 

function Login() {
  return (
    <div className= 'auth'>
        <h1 className='title'>Login</h1>
        <form className='form-title'>
            <input type='text' placeholder='username' className='input-class' />
            <input type='password' placeholder='password' className='input-class' />
            <button className='login-btn'>Login</button>
            <span className='account-question'>Need an account? 
                <Link to= '/register'>register</Link>
            </span>
        </form>
    </div>
  )
}

export default Login
