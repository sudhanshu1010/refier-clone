import React, { useState } from 'react'
import styles from './Posts.module.css'
import Jobcard from '../Jobcard/Jobcard'
import Filter from '../../Images/filter.png'
import Togglebutton from '../Togglebutton/Togglebutton'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Posts = () => {
    const [toggle, setToggle] = useState(false)
    const [sliderValue, setSliderValue] = useState(0)
    const [categoryModal, setCategoryModal] = useState(false)
    const [locationModal, setLocationModal] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("+91")

    function handleSlider(value) {
        setSliderValue(value)
    }

    return (
        <div className={styles.posts_main_container}>
            <div className={styles.posts_left_container}>
                <div className={styles.posts_filter_container}>
                    <img src={Filter} />
                    Filters
                </div>
                <label>Category</label>

                <div className={styles.posts_category_container} onClick={() => { setCategoryModal(!categoryModal) }}>
                    <input placeholder="eg - Sales, Marketing" />
                    <div className={styles.down_arrow}><span>ˇ</span></div>
                    {
                        categoryModal ? (
                            <div className={styles.category_dropdown}>
                                <ul>
                                    <li>Sales</li>
                                    <li>Marketing</li>
                                    <li>HR</li>
                                    <li>Finance</li>
                                    <li>Project Management</li>
                                    <li>Customer care</li>
                                    <li>Tech</li>
                                    <li>Specialized</li>
                                    <li>Leadership</li>
                                    <li>Production</li>
                                    <li>Operations</li>
                                    <li>Education</li>
                                </ul>
                            </div>
                        ) : <></>
                    }
                </div>

                <label>Location</label>

                <div className={styles.posts_location_container} onClick={() => { setLocationModal(!locationModal) }}>
                    <input placeholder="eg - Delhi, Mumbai" />
                    <div className={styles.down_arrow}><span>ˇ</span></div>
                    {
                        locationModal ? (
                            <div className={styles.location_dropdown}>
                                <ul>
                                    <li>Mumbai</li>
                                    <li>Delhi</li>
                                    <li>Bengaluru</li>
                                    <li>Hyderabad</li>
                                    <li>Chennai</li>
                                    <li>Kolkata</li>
                                    <li>Pune</li>
                                    <li>Jaipur</li>
                                    <li>Surat</li>
                                    <li>Lucknow</li>
                                    <li>Kanpur</li>
                                    <li>Nagpur</li>
                                    <li>Patna</li>
                                    <li>Mumbai</li>
                                    <li>Indore</li>

                                </ul>
                            </div>
                        ) : <></>
                    }
                </div>

                <div className={styles.toggle_container}>
                    <div>Work from home</div>
                    <div><Togglebutton/></div>
                </div>
                <div className={styles.toggle_container}>
                    <div>Only internships</div>
                    <div><Togglebutton/></div>
                </div>
                <div className={styles.slider_value_container}>
                    <div>Desired Minimum Monthly Pay</div>
                    <div>{sliderValue}L</div>
                </div>
                <input className={styles.slider_container} type="range" min="1" max="10" step=".5" onChange={(e) => { handleSlider(e.target.value) }} />

            </div>

            <div className={styles.posts_middle_container}>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
                <Jobcard/>
            </div>

            <div className={styles.posts_right_container}>
                <div className={styles.posts_header}>Confused?<br></br>We can help you</div>
                <div className={styles.posts_form_container}>
                    <label>Full Name</label>
                    <input placeholder="John Doe" type="text" />

                    <label>Email</label>
                    <input placeholder="Email" type="text" />

                    <h4>Mobile Number</h4>
                    <div className={styles.mobile_details_container}>
                        <PhoneInput
                            defaultCountry='IN'
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            onChange={setPhoneNumber} />
                    </div>
                    <button className={styles.posts_button}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Posts;