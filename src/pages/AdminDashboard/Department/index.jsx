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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Departments</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Department</a>
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
                            <p>Total <span className={styles.nextPageSpan}>2</span></p>
                            <p><GrFormPreviousLink className={styles.nextPrevIcon} /> <span className={styles.nextPageSpan}>1</span> <GrFormNextLink className={styles.nextPrevIcon} /></p>
                        </div>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="menu0" role="tabpanel" aria-labelledby="menu0-tab">
                            <div className={styles.contentTable}>
                                <div className={`container ${styles.contentTableHead}`}>
                                    <div className="row">
                                        <div className='col-1'>#</div>
                                        <div className='col-8 col-sm-4 col-lg-2'>Department</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-5 col-lg-3'>Head</div>
                                        <div className='col-lg-3 d-none d-lg-block'>Specialization</div>
                                        <div className='col-lg-1 d-none d-lg-block'>Hours</div>
                                        <div className='col-3 col-sm-2'>Option</div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>1</div>
                                        <div className='col-8 col-sm-4 col-lg-2'>Surgery</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-5 col-lg-3'>Muhammad Aminu</div>
                                        <div className='col-lg-3 d-none d-lg-block'>For operations and surgery</div>
                                        <div className='col-lg-1 d-none d-lg-block'>5</div>
                                        <div className='col-3 col-sm-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>2</div>
                                        <div className='col-8 col-sm-4 col-lg-2'>Anaesthesiology</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-5 col-lg-3'>Muhammad Nasiru</div>
                                        <div className='col-lg-3 d-none d-lg-block'>Preping patients for surgery</div>
                                        <div className='col-lg-1 d-none d-lg-block'>2</div>
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
                                        <label htmlFor="nameInputField" className="form-label">Department name</label>
                                        <input type="text" className="form-control" id="nameInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="specializationInputField" className="form-label">Specialization / Services</label>
                                        <input type="text" className="form-control" id="specializationInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="headInputField" className="form-label">Head of department</label>
                                        <input type="text" className="form-control" id="headInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="operatingInputField" className="form-label">Operating hours</label>
                                        <input type="number" className="form-control" id="operatingInputField" />
                                    </div>
                                    <div className={`col-12 ${styles.formColDiv}`}>
                                        <label htmlFor="descriptionInputField" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="descriptionInputField" />
                                    </div>
                                </div>

                                <div class={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" class="btn btn-primary">Add Department</button>
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
