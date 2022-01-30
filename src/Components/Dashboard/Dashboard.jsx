import React from 'react';
import styles from './Dashboard.module.css'
import Navbar from '../Navbar/Navbar'
import Posts from '../Posts/Posts'
import Footer from '../Footer/Footer'

const Dashboard = ({ childToParent }) => {

    return (
        <div className={styles.dashboard_main_container}>
            <Navbar childToParent={childToParent} />
            <Posts />
            <Footer />
        </div>
    )
}

export default Dashboard;