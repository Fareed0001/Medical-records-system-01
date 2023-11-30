import React from 'react';
import styles from '../Navbar.module.css';
import { FaUserNurse } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div className={`container ${styles.navbar}`}>
            <p className={styles.greeting}>
            <span className={styles.username}>Angela Yu</span> <br />
                <span className={styles.welcome}>Welcome back</span></p>

            <p className={styles.role}><span className={styles.icon}>
                <FaUserNurse /></span> Nurse</p>
        </div>
    );
}

export default Navbar;
