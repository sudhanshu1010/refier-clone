import React from 'react';
import styles from './Footer.module.css'
import Instagram from '../../Images/instagram.png'
import Facebook from '../../Images/facebook.png'
import Linkedin from '../../Images/linkedin.png'
import Twitter from '../../Images/twitter.png'
import Youtube from '../../Images/youtube.png'

const Footer = () => {
    return (
        <div className={styles.footer_main_container}>
            <div className={styles.footer_content_container}>
                <div className={styles.footer_container_one}>
                    <h1>ReFier</h1>
                    <small>Plot-76 D, Udyog Vihar, Phase-4, Section-18, Gurugram, Haryana, India - 122001</small>
                    <div className={styles.footer_socials_container}>
                        <div>
                            <img src={Instagram} />
                        </div>
                        <div>
                            <img src={Facebook} />
                        </div>
                        <div>
                            <img src={Twitter} />
                        </div>
                        <div>
                            <img src={Linkedin} />
                        </div>
                        <div>
                            <img src={Youtube} />
                        </div>


                    </div>
                    <p>Sign up for job alerts</p>
                    <div className={styles.footer_signup_container}>
                        <input placeholder="Your Email Address" />
                        <button>Submit</button>
                    </div>
                </div>

                <div className={styles.footer_container_two}>
                    <h3>Discover</h3>
                    <a href="#">Jobs</a>
                    <a href="#">Jobseeker</a>
                    <a href="#">College</a>
                    <a href="#">Enterprise</a>
                    <a href="#">Blog</a>
                    <a href="#">ISA</a>
                    <a href="#">Newsletter</a>

                </div>

                <div className={styles.footer_container_three}>
                    <h3>Company</h3>
                    <a href="#">Contact Us</a>
                    <a href="#">About Us</a>
                </div>

                <div className={styles.footer_container_four}>
                    <h3>Contact</h3>
                    <a href="#">+91-8790909745</a>
                    <a href="#">info@refier.com</a>
                </div>
            </div>
            <div className={styles.footer_lower_container}>
                <div className={styles.lower_left_container}>
                    Copyrights © 2021 All Rights Reserved by Refassist Solutions Pvt Ltd
                </div>
                <div className={styles.lower_right_container}>
                    <div>Privacy Policy</div>
                    <div className={styles.footer_terms}>Terms</div>
                    <div>Sitemap</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;