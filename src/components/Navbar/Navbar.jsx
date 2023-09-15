import React from 'react';
import styles from './Navbar.module.css';
import { MdAdminPanelSettings } from "react-icons/Md";

const Navbar = () => {
    return (
        <div className={`container ${styles.navbar}`}>
            <p className={styles.greeting}>
            <span className={styles.username}>Hi Farid Ibrahim</span> <br />
                <span className={styles.welcome}>Welcome back</span></p>

            <p className={styles.role}><span className={styles.icon}>
                <MdAdminPanelSettings /></span> Admin</p>
        </div>
    );
}

export default Navbar;
