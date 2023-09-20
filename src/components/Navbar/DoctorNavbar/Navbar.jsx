import React from 'react';
import styles from '../Navbar.module.css';
import { FaUserDoctor } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div className={`container ${styles.navbar}`}>
            <p className={styles.greeting}>
            <span className={styles.username}>Muhammad Aminu</span> <br />
                <span className={styles.welcome}>Welcome back</span></p>

            <p className={styles.role}><span className={styles.icon}>
                <FaUserDoctor /></span> Doctor</p>
        </div>
    );
}

export default Navbar;
