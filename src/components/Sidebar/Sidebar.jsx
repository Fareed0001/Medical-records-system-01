import React from 'react';
import styles from './sidebar.module.css';
import { SidebarData } from './SidebarData';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul>
            <img src="..\images\moreed-black-logo.png" alt="moreed-logo" />
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

export default Sidebar;
