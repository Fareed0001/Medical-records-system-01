import React from 'react';
import Sidebar from '@/components/Sidebar/DoctorSidebar/Sidebar';
import DoctorNavbar from '@/components/Navbar/DoctorNavbar/DoctorNavbar';
import styles from "./DoctorDashboard.module.css";
// import { BsFillCalendar2DateFill } from "react-icons/bs";
// import { BsCreditCard2BackFill } from "react-icons/bs"
// import { FaBedPulse, } from "react-icons/fa6"
// import Link from 'next/link';

const Index = () => {
    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <DoctorNavbar />
                {/* body content start */}

                <div className={styles.banner}>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <p className={styles.bannerText}>Need a medical records system? <br />
                                Try Moreed</p>
                            <p className={styles.bannerSubText}>Your medical health records technology provider</p>
                            <button type='button' className='btn btn-light btn-lg'>Analytics</button>
                        </div>
                        <div className='col-sm-6'>
                            <img src='.\images\dashboard-images\admin-banner.png' alt='banner-img' />
                        </div>
                    </div>
                </div>

                
                {/* body content end */}
            </div>
        </div>
    );
}

export default Index;
