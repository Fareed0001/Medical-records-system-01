import React, { useEffect } from 'react';
import Sidebar from '@/components/Sidebar/AdminSidebar/Sidebar';
import Navbar from '@/components/Navbar/AdminNavbar/Navbar';
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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Receptionists</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Receptionist</a>
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
                                        <div className='col-2'>Employment / shift</div>
                                        <div className='col-2'>Phone</div>
                                        <div className='col-3'>Email</div>
                                        <div className='col-2'>Option</div>
                                    </div>
                                </div>
                                <div className={styles.contentTableBody}>
                                    <div className="row">
                                        <div className='col-1'>1</div>
                                        <div className='col-2'>Alexa Stone</div>
                                        <div className='col-2'>Part-time / day shift</div>
                                        <div className='col-2'>0905 606 2376</div>
                                        <div className='col-3'>alexa@gmail.com</div>
                                        <div className='col-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.contentTableBody}>
                                    <div className="row">
                                        <div className='col-1'>2</div>
                                        <div className='col-2'>Indila Danse</div>
                                        <div className='col-2'>full-time / night shift</div>
                                        <div className='col-2'>0814 606 2376</div>
                                        <div className='col-3'>indila@gmail.com</div>
                                        <div className='col-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="menu1-tab">
                            <form className={styles.form}>
                                <div className='row'>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="nameInputField" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="nameInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="emailInputField" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="emailInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="employmentInputField" className="form-label">Employment type / Status</label>
                                        <input type="text" className="form-control" id="employmentInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="notesInputField" className="form-label">Notes / responsibilities</label>
                                        <input type="text" className="form-control" id="notesInputField" />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="genderInputField" className="form-label">Gender</label>
                                        <input type="text" className="form-control" id="genderInputField" />
                                    </div>
                                    <div className={`col-10 ${styles.formColDiv}`}>
                                        <label htmlFor="addressInputField" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="addressInputField" />
                                    </div>
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="phoneInputField" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="phoneInputField" />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="scheduleInputField" className="form-label">Shift schedule</label>
                                        <input type="text" className="form-control" id="scheduleInputField" />
                                    </div>
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="passwordInputField" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="passwordInputField" />
                                    </div>
                                </div>

                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add Receptionist</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* body content end */}
            </div>
        </div>
    );
}

export default Index;
