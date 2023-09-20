import React from 'react';
// import Sidebar from '@/components/Sidebar/Sidebar';
import styles from "./DoctorDashboard.module.css";
import Navbar from "@/components/Navbar/DoctorNavbar/Navbar"

const Index = () => {
    return (
        <div className={styles.body}>
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}
                Does the navbar work?????
                {/* body content end */}
            </div>
        </div>
    );
}

export default Index;
