import React, { useState } from 'react';
import styles from './App.module.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Google from './Images/google.png'

const App = () => {
  const [isLoginClicked, setLoginClicked] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const childToParent = (childData) => {
    setLoginClicked(childData)
  }

  function handleInput() {
      if(email && password){
        alert('Successful login')
        setLoginClicked(false)
      }
  }

  return (
    <div className={styles.app_main_container}>
      <Dashboard childToParent={childToParent} />
      {
        isLoginClicked ? (
          <div className={styles.login_form_container} >
            <div className={styles.login_form}>
              <div className={styles.login_form_name}>
                <h2>Login</h2>
                <div onClick={() => { setLoginClicked(false) }}>x</div>
              </div>

              <div className={styles.login_google}>
                <div className={styles.google_icon_container}>
                  <img src={Google}/>
                </div>
                Sign in with Google
              </div>

              <div className={styles.login_divider}>
                <hr></hr>
                <label>OR</label>
              </div>

              <label>Email</label>
              <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>

              <label>Password</label>
              <input placeholder="Must be atleast 8 characters long" onChange={(e) => {setPassword(e.target.value)}}/>

              <a href="#">Forget Password?</a>

              <button className={styles.login_button} onClick={handleInput}>Login</button>

              <h5>New to Refier? Register as <a>Student</a> / <a>Enterprise</a></h5>
            </div>
          </div>
        ) : <></>
      }
    </div>
  )
}

export default App;