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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Nurses</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Nurse</a>
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
                            <p>Total <span className={styles.nextPageSpan}>3</span></p>
                            <p><GrFormPreviousLink className={styles.nextPrevIcon} /> <span className={styles.nextPageSpan}>1</span> <GrFormNextLink className={styles.nextPrevIcon} /></p>
                        </div>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="menu0" role="tabpanel" aria-labelledby="menu0-tab">
                            <div className={styles.contentTable}>
                                <div className={`container ${styles.contentTableHead}`}>
                                    <div className="row">
                                        <div className='col-1'>#</div>
                                        <div className='col-8 col-sm-4 col-lg-2'>Name</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Department</div>
                                        <div className='col-2 d-none d-lg-block'>Phone</div>
                                        <div className='col-3 d-none d-lg-block'>Email</div>
                                        <div className='col-3 col-sm-2'>Option</div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>1</div>
                                        <div className='col-8 col-sm-4 col-lg-2'>Lifted Enoch</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Surgery</div>
                                        <div className='col-2 d-none d-lg-block'>0905 606 2376</div>
                                        <div className='col-3 d-none d-lg-block'>nurselifted@gmail.com</div>
                                        <div className='col-3 col-sm-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>2</div>
                                        <div className='col-8 col-sm-4 col-lg-2'>Agnes John</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Anaesthesiology</div>
                                        <div className='col-2 d-none d-lg-block'>0813 633 5154</div>
                                        <div className='col-3 d-none d-lg-block'>nurseagnes@gmail.com</div>
                                        <div className='col-3 col-sm-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>3</div>
                                        <div className='col-8 col-sm-4 col-lg-2'>Maryam Isa</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Pathology</div>
                                        <div className='col-2 d-none d-lg-block'>0905 292 7094</div>
                                        <div className='col-3 d-none d-lg-block'>nursemaryam@gmail.com</div>
                                        <div className='col-3 col-sm-2'>
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
                                        <label htmlFor="departmentInputField" className="form-label">Department</label>
                                        <input type="text" className="form-control" id="departmentInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="unitInputField" className="form-label">Unit / Division</label>
                                        <input type="text" className="form-control" id="unitInputField" />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="genderInputField" className="form-label">Gender</label>
                                        <input type="text" className="form-control" id="genderInputField" />
                                    </div>
                                    <div className={`col-md-10 ${styles.formColDiv}`}>
                                        <label htmlFor="addressInputField" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="addressInputField" />
                                    </div>
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="phoneInputField" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="phoneInputField" />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="scheduleInputField" className="form-label">Shift</label>
                                        <input type="text" className="form-control" id="scheduleInputField" />
                                    </div>
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="passwordInputField" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="passwordInputField" />
                                    </div>
                                </div>

                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add Nurse</button>
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
