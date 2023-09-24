import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import styles from '../sidebar.module.css';
import { SidebarData } from './SidebarData';
import Link from 'next/link';

const Sidebar = () => {
    const router = useRouter(); // Get the current route

    return (
        <div className={styles.sidebar}>
            <ul>
                <Link href="/">
                    <img src="..\images\moreed-black-logo.png" alt="moreed-logo" />
                </Link>
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

export default Sidebar;
