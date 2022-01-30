import React from 'react';
import styles from './Jobcard.module.css'
import Joblogo from '../../Images/Jobcard logo.svg';
import Location from '../../Images/Location.png'
import Experience from '../../Images/suitcase.png'

const Jobcard = ({heading, company, location, experience, jobDetail, jobType1, jobType2, jobType3}) => {
    return (
        <div className={styles.jobcard_main_container}>
            <div className={styles.jobcard_heading_container}>
                <div className={styles.jobcard_heading}>
                    <h4>{heading}</h4>
                    <p>{company}</p>
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
                        <div className={styles.location_container}>{location}</div>
                    </div>
                    <div className={styles.jobcard_experience_container}>
                        <div className={styles.keypoints_image_container}>
                            <img src={Experience}/>
                        </div>
                        <div className={styles.experience_container}>{experience}+ years Experience</div>
                    </div>
                </div>
                
                <div className={styles.jobcard_details}>
                    <p>{jobDetail}</p>
                </div>
                <div className={styles.jobcard_type}>
                    <div className={styles.jobtype_container}>
                        {jobType1 ? <div>{jobType1}</div> : <></>}
                        {jobType2 ? <div>{jobType2}</div> : <></>}
                        {jobType3 ? <div>{jobType3}</div> : <></>}
                    </div>
                    <button className={styles.job_apply}>Apply Now</button>
                </div>
            </div>

        </div>
    )
}

export default Jobcard;