import React, { useEffect } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';
import styles from "@/pages/AdminDashboard/Styles.module.css";
import { BiSearch, BiSolidEditAlt } from "react-icons/bi"
import { BsTrashFill } from "react-icons/bs"
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"

const Index = () => {
    useEffect(() => {
        // Initialize Bootstrap tabs using JavaScript when the component mounts
        const tabs = new window.bootstrap.Tab(document.getElementById('menu0'));
        tabs.show();
    }, []);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}

                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Payments</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Today's payments</a>
                        </li>
                    </ul>

                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-primary" type="submit"><BiSearch /></button>
                            </form>
                        </div>
                        <div className={`col-6 ${styles.nextPageDiv}`}>
                            <p>Total <span className={styles.nextPageSpan}>1</span></p>
                            <p><GrFormPreviousLink className={styles.nextPrevIcon} /> <span className={styles.nextPageSpan}>1</span> <GrFormNextLink className={styles.nextPrevIcon} /></p>
                        </div>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="menu0" role="tabpanel" aria-labelledby="menu0-tab">
                            <div className={styles.contentTable}>
                                <div className={`container ${styles.contentTableHead}`}>
                                    <div className="row">
                                        <div className='col-1'>#</div>
                                        <div className='col-2'>Name</div>
                                        <div className='col-2'>Amount</div>
                                        <div className='col-2'>Phone</div>
                                        <div className='col-3'>Email</div>
                                        <div className='col-2'>Option</div>
                                    </div>
                                </div>
                                <div className={styles.contentTableBody}>
                                    <div className="row">
                                        <div className='col-1'>1</div>
                                        <div className='col-2'>Abba Abdulmanaf</div>
                                        <div className='col-2'>₦50,000</div>
                                        <div className='col-2'>0905 606 2376</div>
                                        <div className='col-3'>Paymentabba@gmail.com</div>
                                        <div className='col-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="menu1-tab">
                        <div className={styles.contentTable}>
                                <div className={`container ${styles.contentTableHead}`}>
                                    <div className="row">
                                        <div className='col-1'>#</div>
                                        <div className='col-2'>Name</div>
                                        <div className='col-2'>Amount</div>
                                        <div className='col-2'>Phone</div>
                                        <div className='col-3'>Email</div>
                                        <div className='col-2'>Option</div>
                                    </div>
                                </div>
                                <div className={styles.contentTableBody}>
                                    <div className="row">
                                        <div className='col-1'>1</div>
                                        <div className='col-2'>Abba Abdulmanaf</div>
                                        <div className='col-2'>₦50,000</div>
                                        <div className='col-2'>0905 606 2376</div>
                                        <div className='col-3'>Paymentabba@gmail.com</div>
                                        <div className='col-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* body content end */}
            </div>
        </div>
    );
}

export default Index;
