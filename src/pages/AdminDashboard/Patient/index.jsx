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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Patients</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Patient</a>
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
                            <p>Total <span className={styles.nextPageSpan}>564532</span></p>
                            <p><GrFormPreviousLink className={styles.nextPrevIcon} /> <span className={styles.nextPageSpan}>1</span> <GrFormNextLink className={styles.nextPrevIcon} /></p>
                        </div>
                    </div>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="menu0" role="tabpanel" aria-labelledby="menu0-tab">
                            <div className={styles.contentTable}>
                                <div className={`container ${styles.contentTableHead}`}>
                                    <div className="row">
                                        <div className='col-1'>#</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Number</div>
                                        <div className='col-8 col-sm-5 col-lg-2'>Name</div>
                                        <div className='col-2 d-none d-lg-block'>Phone</div>
                                        <div className='col-1 d-none d-lg-block'>Gender</div>
                                        <div className='col-2 d-none d-lg-block'>Date of birth</div>
                                        <div className='col-3 col-sm-2'>Option</div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>1</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>443j4j356j</div>
                                        <div className='col-8 col-sm-5 col-lg-2'>Hadiza Isa</div>
                                        <div className='col-2 d-none d-lg-block'>0905 487 2276</div>
                                        <div className='col-1 d-none d-lg-block'>Female</div>
                                        <div className='col-2 d-none d-lg-block'>08 - 12 - 1999</div>
                                        <div className='col-3 col-sm-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>2</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>6540fvv90v</div>
                                        <div className='col-8 col-sm-5 col-lg-2'>Wayne Cater</div>
                                        <div className='col-2 d-none d-lg-block'>0912 487 4536</div>
                                        <div className='col-1 d-none d-lg-block'>Male</div>
                                        <div className='col-2 d-none d-lg-block'>03 - 2 - 2009</div>
                                        <div className='col-3 col-sm-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>3</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>4039rhrew0</div>
                                        <div className='col-8 col-sm-5 col-lg-2'>Pepe Comrade</div>
                                        <div className='col-2 d-none d-lg-block'>0709 786 2276</div>
                                        <div className='col-1 d-none d-lg-block'>Male</div>
                                        <div className='col-2 d-none d-lg-block'>24 - 6 - 2002</div>
                                        <div className='col-3 col-sm-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>4</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>1012049fv9</div>
                                        <div className='col-8 col-sm-5 col-lg-2'>Jackie Reacher</div>
                                        <div className='col-2 d-none d-lg-block'>0709 778 5656</div>
                                        <div className='col-1 d-none d-lg-block'>Female</div>
                                        <div className='col-2 d-none d-lg-block'>13 - 12 - 1990</div>
                                        <div className='col-3 col-sm-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <div className="row">
                                        <div className='col-1'>5</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>908dvsdf78</div>
                                        <div className='col-8 col-sm-5 col-lg-2'>Kenny Rowlan</div>
                                        <div className='col-2 d-none d-lg-block'>0904 655 2452</div>
                                        <div className='col-1 d-none d-lg-block'>Male</div>
                                        <div className='col-2 d-none d-lg-block'>28 - 11 - 2017</div>
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
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="recordInputField" className="form-label">Medical record number</label>
                                        <input type="text" className="form-control" id="recordInputField" value='04af932sd8' disabled/>
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="nameInputField" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="nameInputField" />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="genderInputField" className="form-label">Gender</label>
                                        <input type="text" className="form-control" id="genderInputField" />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="dobInputField" className="form-label">Date of birth</label>
                                        <input type="date" className="form-control" id="dobInputField" />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="physicianInputField" className="form-label">Primary Care Physician</label>
                                        <input type="text" className="form-control" id="physicianInputField"/>
                                    </div>
                                    <div className={`col-md-4 ${styles.formColDiv}`}>
                                        <label htmlFor="allergiesInputField" className="form-label">Allergies</label>
                                        <input type="text" className="form-control" id="allergiesInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="phoneInputField" className="form-label">Phone</label>
                                        <input type="text" className="form-control" id="phoneInputField" />
                                    </div>
                                    <div className={`col-12 ${styles.formColDiv}`}>
                                        <label htmlFor="addressInputField" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="addressInputField" />
                                    </div>
                                </div>

                                <div class={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" class="btn btn-primary">Add doctor</button>
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
