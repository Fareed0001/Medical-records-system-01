import React from 'react';
import styles from '../Navbar.module.css';
import MobileSidebar from '@/components/Navbar/AdminNavbar/AdminMobileSidebar/MobileSidebar';
import { FaBars } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md";

const Navbar = () => {
    return (
        <div className={`container ${styles.navbar}`}>
            <button className={`btn btn-primary ${styles.offCanvas}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><FaBars /></button>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <MobileSidebar />
            </div>
            <p className={styles.greeting}>
            <span className={styles.username}>Hi Farid Ibrahim</span> <br />
                <span className={styles.welcome}>Welcome back</span></p>

            <p className={styles.role}><span className={styles.icon}>
                <MdAdminPanelSettings /></span> Admin</p>
        </div>
    );
}

export default Navbar;
