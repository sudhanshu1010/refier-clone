import React from 'react';
import styles from './Jobcard.module.css'
import Joblogo from '../../Images/Jobcard logo.svg';
import Location from '../../Images/Location.png'
import Experience from '../../Images/suitcase.png'

const Jobcard = () => {
    return (
        <div className={styles.jobcard_main_container}>
            <div className={styles.jobcard_heading_container}>
                <div className={styles.jobcard_heading}>
                    <h4>Business Development Executive (Only for Female Candidates)</h4>
                    <p>Easeassist</p>
                </div>
                <div className={styles.jobcard_logo}>
                    <img src={Joblogo} />
                </div>
            </div>

            <div className={styles.jobcard_content_container}>
                <div className={styles.jobcard_keypoints}>
                    <div className={styles.jobcard_location_container}>
                        <div className={styles.keypoints_image_container}>
                            <img src={Location}/>
                        </div>
                        <div className={styles.location_container}>Remote</div>
                    </div>
                    <div className={styles.jobcard_experience_container}>
                        <div className={styles.keypoints_image_container}>
                            <img src={Experience}/>
                        </div>
                        <div className={styles.experience_container}>0+ years Experience</div>
                    </div>
                </div>
                
                <div className={styles.jobcard_details}>
                    <p>Immediate Joining !! Fast Growing Business Solutions Startup is looking for passionate Female Business Development Professionals who would l...</p>
                </div>
                <div className={styles.jobcard_type}>
                    <div className={styles.jobtype_container}>
                        <div>Remote</div>
                        <div>Full-time</div>
                    </div>
                    <button className={styles.job_apply}>Apply Now</button>
                </div>
            </div>

        </div>
    )
}

export default Jobcard;