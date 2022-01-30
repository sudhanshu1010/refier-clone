import React from 'react'
import styles from './Togglebutton.module.css'

const Togglebutton = () => {
    return (
        <label className={styles.switch}>
            <input type="checkbox"/>
            <span className={styles.slider}/>
        </label>
    )
}

export default Togglebutton;