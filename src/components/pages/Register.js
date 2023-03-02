import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
  return (
    <div className= 'auth'>
        <h1 className='title'>Register</h1>
        <form className='form-title'>
            <input required type='text' placeholder='username' className='input-class' />
            <input required type='email' placeholder='email' className='input-class' />
            <input required type='password' placeholder='password' className='input-class' />
            <button className='register-btn'>Register</button>
            <span className='account-question'>Already have an account? <Link to='/login'>login</Link>
            </span>
        </form>
    </div>
  )
}

export default Register
