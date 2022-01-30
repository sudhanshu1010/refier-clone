import React, { useState } from 'react'
import styles from './Posts.module.css'
import Jobcard from '../Jobcard/Jobcard'
import Filter from '../../Images/filter.png'
import Togglebutton from '../Togglebutton/Togglebutton'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Posts = () => {
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
                    <div><Togglebutton /></div>
                </div>
                <div className={styles.toggle_container}>
                    <div>Only internships</div>
                    <div><Togglebutton /></div>
                </div>
                <div className={styles.slider_value_container}>
                    <div>Desired Minimum Monthly Pay</div>
                    <div>{sliderValue}L</div>
                </div>
                <input className={styles.slider_container} type="range" min="1" max="10" step=".5" onChange={(e) => { handleSlider(e.target.value) }} />

            </div>

            <div className={styles.posts_middle_container}>
                <Jobcard
                    heading='Business Development Executive (Only for Female Candidates)'
                    company='Easeassist'
                    location='Remote'
                    experience='0'
                    jobDetail='Immediate Joining !! Fast Growing Business Solutions Startup is looking for passionate Female Business Development Professionals who would l...'
                    jobType1='Remote'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Customer Care & Events Executive'
                    company='Easeassist'
                    location='Gurugram'
                    experience='1'
                    jobDetail='Looking for a Customer Centric Professional responsible for supporting the design and delivery of the product/Event experience for our custo...'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Enterprise Sales Manager'
                    company='Easeassist'
                    location='Hyderabad/Pune'
                    experience='1'
                    jobDetail='Resourceful and experienced professional whose primary responsibility is to research and pursue new business leads, work on business proposa...'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Area Sales Manager'
                    company='V4U HR SOLUTIONS.COM'
                    location='Karnataka/Bangalore'
                    experience='0'
                    jobDetail='Top ranked company in edu tech industry'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Lead Generation'
                    company='Easeassist'
                    location='Bangalore, Jodhpur, Pune'
                    experience='1'
                    jobDetail='Looking for an ambitious and dynamic professional with 1-6 Years of Experience in Inside Lead Generation/Sales/Business Development for Bang...'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Project Manager'
                    company='Easeassist'
                    location='Raigarh, Chattisgarh'
                    experience='10'
                    jobDetail='A key professional having responsibility of managing a project successfully during its various stages in its life cycle consisting of initia...'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Engineer Mechanical'
                    company='Easeassist'
                    location='Raigarh, Chattisgarh'
                    experience='5'
                    jobDetail=''
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Operations Internship at Refier'
                    company='Easeassist'
                    location='Remote'
                    experience='0'
                    jobDetail='Looking for full-time passouts who are looking to build a career in Operations and Customer Experience'
                    jobType1='REMOTE'
                    jobType2='Internship'
                    jobType3='2 months'
                />
                <Jobcard
                    heading='Business Development Manager (For Gurgaon/ Mumbai/Bangalore Location)'
                    company='Easeassist'
                    location='Gurgaon/ Mumbai/Bangalore'
                    experience='0'
                    jobDetail='Immediate Joining !! Fast Growing HR Tech Startup is looking for passionate Sales Professionals who would like to learn, perform and grow al...'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Inside Sales (Only for Females)'
                    company='Easeassist'
                    location='Noida'
                    experience='0'
                    jobDetail='Urgent Requirement - Looking for Female Sales Professionals for Inside Selling Job Role at Noida Location'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Engineer Electrical'
                    company='Easeassist'
                    location='Raigarh, Chattisgarh'
                    experience='5'
                    jobDetail='Designing, maintaining, implementing, or improving electrical instruments, facilities, components, equipment products, or systems for indust...'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Sr. Sales Manager'
                    company='Learn and Build'
                    location='Remote'
                    experience='3'
                    jobDetail='Looking for an enthusiastic and ambitious Sales Professional who can manage organizational sales by developing a business plan that covers s...'
                    jobType1='REMOTE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='IT Project Manager'
                    company='Easeassist'
                    location='Remote'
                    experience='1'
                    jobDetail='Immediate Joining !! Fast Growing Business Solutions Startup is looking for passionate IT Project Manager Professionals, who would like to l...'
                    jobType1='REMOTE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Senior HR Recruiter'
                    company='Easeassist'
                    location='Gurugram'
                    experience='1'
                    jobDetail="Looking for someone who can be responsible for all aspects of recruiting for organization and plays a critical role in ensuring it's hiring ..."
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='HR'
                    company='Easeassist'
                    location='Raigarh, Chattisgarh'
                    experience='5'
                    jobDetail='The Personnel will be responsible for managing the entire HR Functions of Payroll, Compliances, Hiring, Learning, Employee relations, Organi...'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Sales /Marketing / Business Development Executive'
                    company='BRO Services'
                    location='Pune'
                    experience='0'
                    jobDetail='Job Opportunity in BRO Services( Fast Growing Delivery services, Logistics company) @Balewadi, Pune.'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Business Development Leader (For Bangalore/Pune/Jodhpur Location)'
                    company='Easeassist'
                    location='Bangalore/Pune'
                    experience='2'
                    jobDetail='Looking for an experienced professional with 2-12 Years of Experience in Inside Sales/Business Development for Bangalore/Jodhpur/Pune Locati...'
                    jobType1='INOFFICE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Career Guide - Business Development (Internship + PPO)'
                    company='Easeassist'
                    location='Remote'
                    experience='0'
                    jobDetail='Looking for an ambitious fresher and experienced professionals who look forward to work and grow in one of the best edTech organisation'
                    jobType1='REMOTE'
                    jobType2='Full-Time'
                />
                <Jobcard
                    heading='Sales Intern'
                    company='BRO Services'
                    location='Pune'
                    experience='0'
                    jobDetail='Internship Opportunity in BRO Services( Fast Growing Delivery services, Logistics company) @Balewadi, Pune.'
                    jobType1='INOFFICE'
                    jobType2='Internship'
                />

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