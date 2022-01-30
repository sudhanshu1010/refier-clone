import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Hamburger from '../../Images/hamburger.png'
import Google from '../../Images/google.png'

const Logo = 'https://refier.com/static/media/logo_blue.2d02c09e.svg'

const Navbar = ({ childToParent }) => {
    const [marketOpen, setMarketOpen] = useState(false)
    const [registerModalOpen, setRegisterModal] = useState(false)
    const [menu, setMenu] = useState(false)
    const [login, setLogin] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    function handleLogin() {
        setMenu(false)
        setLogin(true)
    }

    function handleInput() {
        if (email && password) {
            alert('Successful login')
            setLogin(false)
        }
    }

    return (
        <div className={styles.navbar_main_container}>
            <div className={styles.navbar_logo_container}>
                <img src={Logo} />
            </div>
            <div className={styles.navbar_links_container}>
                <div>Contact Us</div>
                <div onClick={() => { setMarketOpen(!marketOpen) }} className={styles.navbar_marketplace}>Marketplace<span>&#9660;</span>
                    {
                        marketOpen ? (
                            <div className={styles.marketplace_dropdown}>
                                <ul>
                                    <li>Market Course</li>
                                    <li>Cohort</li>
                                    <li>Courses</li>
                                    <li>Webinars</li>
                                </ul>
                            </div>
                        ) : null
                    }
                </div>
                <div>Jobs</div>
                <div className={styles.navbar_button}>
                    <div className={styles.navbar_login} onClick={() => childToParent(true)}>Login</div>
                    <div className={styles.navbar_register} onClick={() => { setRegisterModal(!registerModalOpen) }}>Register<span>&#9660;</span>
                        {
                            registerModalOpen ? (
                                <div className={styles.register_dropdown}>
                                    <ul>
                                        <li>As a Student</li>
                                        <li>As an Employee</li>
                                    </ul>
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>

            <div className={styles.navbar_hamburger} onClick={() => setMenu(!menu)}>
                <img src={Hamburger} />
            </div>

            {
                menu ? (
                    <div className={styles.navbar_menu_container}>
                        <div className={styles.navbar_menu}>
                            <div>Contact Us</div>
                            <div>Marketplace</div>
                            <div>Jobs</div>
                            <div onClick={() => handleLogin()}>Login</div>
                            <div onClick={() => handleLogin()}>Register</div>
                        </div>
                    </div>
                ) : <></>
            }

            {
                login ? (
                    <div className={styles.login_form_container} >
                        <div className={styles.login_form}>
                            <div className={styles.login_form_name}>
                                <h2>Login</h2>
                                <div onClick={() => { setLogin(false) }}>x</div>
                            </div>

                            <div className={styles.login_google}>
                                <div className={styles.google_icon_container}>
                                    <img src={Google} />
                                </div>
                                Sign in with Google
                            </div>

                            <div className={styles.login_divider}>
                                <hr></hr>
                                <label>OR</label>
                            </div>

                            <label>Email</label>
                            <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />

                            <label>Password</label>
                            <input placeholder="Must be atleast 8 characters long" onChange={(e) => { setPassword(e.target.value) }} />

                            <a href="#">Forget Password?</a>

                            <button className={styles.login_button} onClick={handleInput}>Login</button>

                            <h4>New to Refier? Register as <a>Student</a> / <a>Enterprise</a></h4>
                        </div>
                    </div>
                ) : <></>
            }
        </div>
    )
}

export default Navbar;