import React, { useState } from 'react'
import styles from './Navbar.module.css'

const Logo = 'https://refier.com/static/media/logo_blue.2d02c09e.svg'

const Navbar = ({childToParent}) => {
    const [marketOpen, setMarketOpen] = useState(false)
    const [registerModalOpen, setRegisterModal] = useState(false)

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
        </div>
    )
}

export default Navbar;