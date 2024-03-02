// import '../styles/signup.css'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import React,{ useState } from 'react'
import '../../styles/signup.css'


function SignUp({ form, setForm, confirmPass, setConfimPass }) {

  return (
      <div>
          <label htmlFor = 'email'>* Email:</label>
          <input 
          type ='text' 
          name='email' 
          id='username-textfield' 
          value={form.email}
          onChange={event => setForm({...form, email: event.target.value})}
          required
          />
          {/* <h5 className={usernameValidate ? "handle-form-error" : 'handle-form-hidden'}>{usernameValidate}</h5> */}

          <label htmlFor = 'password'>* Password:</label>
          <input 
          type ='password' 
          name='password' 
          id='password-textfield' 
          value={form.password}
          onChange={event => setForm({...form, password: event.target.value})}
          required
          />

          <label htmlFor = 're-enter-pass'>* Confirm Password:</label>
          <input 
          type ='password' 
          name='re-enter-pass' 
          id='re-enter-textfield'
          value={confirmPass}
          onChange={event => setConfimPass(event.target.value)}
          required
          />

        <hr />

        <p>Already have an account? <Link to = '/login'>Login</Link></p>

      </div>
        
  )
};

export default SignUp;