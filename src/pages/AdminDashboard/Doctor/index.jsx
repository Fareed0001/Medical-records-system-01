import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';
import styles from "./Doctor.module.css";

const Index = () => {
    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}

                <h1>welcome doctor</h1>
               
                {/* body content end */}
            </div>
        </div>
    );
}

export default Index;
