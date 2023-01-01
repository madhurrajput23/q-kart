import axios from 'axios';
import { useState } from 'react'
import styles from './login.module.css';



const Login = () => {
   const[username, setUsername] = useState();
   const[password, setPassword] = useState();

  const loginHandler = (event) =>{
    event.preventDefault();
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: username,
        password: password,
        // expiresInMins: 60, // optional
      })
    })
    .then(res => res.json())
    .then(console.log);
  }

  const guestLoginHandler = (event) =>{
    event.preventDefault();
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: 'kminchelle',
        password: '0lelplR',
        // expiresInMins: 60, // optional
      })
    })
    .then(res => res.json())
    .then(console.log);
  }
  

  return (
    <form className={styles.loginForm}>
      <label htmlFor="username" className={styles.label}>
        Username
      </label>
      <input type="text" id="username" className={styles.input} onChange={(event)=>setUsername(event.target.value)}/>
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input type="password" id="password" className={styles.input} onChange={(event)=>setPassword(event.target.value)}/>
      <button type="submit" className="primary_button" onClick={loginHandler}>
        Log In
      </button>
      <button type="submit" className="primary_button" onClick={guestLoginHandler}>
        Guest Login
      </button>
    </form>
  )
}

export default Login;
