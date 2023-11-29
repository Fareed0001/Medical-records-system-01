import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/components/Navbar/Navbar.module.css'; // Adjust this import path as needed
import { SidebarData } from '@/components/Sidebar/ReceptionistSidebar/SidebarData'; // Adjust this import path as needed
import Link from 'next/link';

const MobileSidebar = () => {
    const router = useRouter();

    return (
        <div className={styles.mobileSidebar}>
            <ul>
                {SidebarData.map((data, key) => (
                    <Link key={key} href={data.link} className={styles.link}>
                        <li className={router.pathname === data.link ? styles.activeItem : ''}>
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
