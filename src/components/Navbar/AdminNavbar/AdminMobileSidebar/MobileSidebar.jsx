import React from 'react';
import styles from '@/components/Navbar/Navbar.module.css';
import { SidebarData } from '@/components/Sidebar/AdminSidebar/SidebarData';
import Link from 'next/link';

const MobileSidebar = () => {
    return (
        <div className={styles.mobileSidebar}>
            <ul>
                {SidebarData.map((data, key) => (
                    <Link key={key} href={data.link} className={styles.link}>
                        <li>
                            <div>
                                <span className={styles.icon}>{data.icon}</span>
                                <span className={styles.title}> {data.title}</span>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default MobileSidebar;
