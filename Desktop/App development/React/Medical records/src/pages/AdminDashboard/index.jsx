import React from 'react';
import Sidebar from '@/components/Sidebar/AdminSidebar/Sidebar';
import Navbar from '@/components/Navbar/AdminNavbar/Navbar';
import styles from "./AdminDashboard.module.css";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BsCreditCard2BackFill } from "react-icons/bs"
import { FaBedPulse, } from "react-icons/fa6"
import Link from 'next/link';

const Index = () => {
    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
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

                <div className={styles.belowBanner}>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <Link href="AdminDashboard/Appointment">
                                <div className={styles.belowBannerCol}>
                                    <BsFillCalendar2DateFill className={styles.belowBannerIcons} />
                                    <p>Appointments</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-4'>
                            <Link href="AdminDashboard/Payment">
                                <div className={styles.belowBannerCol}>
                                    <BsCreditCard2BackFill className={styles.belowBannerIcons} />
                                    <p>Payments</p>
                                </div>
                            </Link>
                        </div>
                        <div className='col-sm-4'>
                            <Link href="AdminDashboard/Ward">
                                <div className={styles.belowBannerCol}>
                                    <FaBedPulse className={styles.belowBannerIcons} />
                                    <p>Wards</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* body content end */}
            </div>
        </div>
    );
}

export default Index;
