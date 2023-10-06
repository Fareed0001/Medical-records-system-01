import React from 'react';
import styles from '../Navbar.module.css';
import MobileSidebar from '@/components/Navbar/DoctorNavbar/DoctorMobileSidebar/MobileSidebar';
import { FaBars } from "react-icons/fa6";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={`container ${styles.navbar}`}>
            <button className={`btn btn-primary ${styles.offCanvas}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><FaBars /></button>
            <div className={`offcanvas offcanvas-start ${styles.offCanvasWidth}`} data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className={`offcanvas-header ${styles.offcanvasHeader}`}>
                    <Link href="/" className={styles.offCanvasImageLink}>
                        <img src="..\images\moreed-black-logo.png" alt="moreed-logo" />
                    </Link>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <MobileSidebar />
                </div>
            </div>

            <p className={styles.greeting}>
                <span className={styles.username}>Muhammad Aminu</span> <br />
                <span className={styles.welcome}>Welcome back</span></p>

            <Link href="/" className={styles.roleLink}>
                <p className={styles.role}><span className={styles.icon}>
                    <GiPlagueDoctorProfile /></span> Doctor</p>
            </Link>

        </div>
    );
}

export default Navbar;
