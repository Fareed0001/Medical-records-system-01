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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Wards</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Ward</a>
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
                                        <div className='col-2'>Name</div>
                                        <div className='col-2'>Type</div>
                                        <div className='col-2'>Capacity</div>
                                        <div className='col-3'>Manager</div>
                                        <div className='col-2'>Option</div>
                                    </div>
                                </div>
                                <div className={styles.contentTableBody}>
                                    <div className="row">
                                        <div className='col-1'>1</div>
                                        <div className='col-2'>West wing ward</div>
                                        <div className='col-2'>General</div>
                                        <div className='col-2'>37</div>
                                        <div className='col-3'>Isaac Shams</div>
                                        <div className='col-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.contentTableBody}>
                                    <div className="row">
                                        <div className='col-1'>2</div>
                                        <div className='col-2'>Central ward</div>
                                        <div className='col-2'>Special</div>
                                        <div className='col-2'>2</div>
                                        <div className='col-3'>Lukas Graham</div>
                                        <div className='col-2'>
                                            <BiSolidEditAlt className={styles.penIcon} />
                                            <BsTrashFill className={styles.binIcon} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.contentTableBody}>
                                    <div className="row">
                                        <div className='col-1'>3</div>
                                        <div className='col-2'>Confined ward</div>
                                        <div className='col-2'>Isolation</div>
                                        <div className='col-2'>100</div>
                                        <div className='col-3'>Ava max</div>
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
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="wardTypeInputField" className="form-label">Ward type</label>
                                        <input type="text" className="form-control" id="wardTypeInputField" />
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="timeInputField" className="form-label">Operating time</label>
                                        <input type="text" className="form-control" id="timeInputField" />
                                    </div>
                                    <div className={`col-md-8 ${styles.formColDiv}`}>
                                        <label htmlFor="descriptionInputField" className="form-label">Description</label>
                                        <input type="text" className="form-control" id="descriptionInputField" />
                                    </div>
                                    <div className={`col-md-4 ${styles.formColDiv}`}>
                                        <label htmlFor="capacityInputField" className="form-label">Capacity</label>
                                        <input type="number" className="form-control" id="capacityInputField" />
                                    </div>
                                    <div className={`col-5 ${styles.formColDiv}`}>
                                        <label htmlFor="managerInputField" className="form-label">Manager</label>
                                        <input type="text" className="form-control" id="managerInputField" />
                                    </div>
                                    <div className={`col-md-7 ${styles.formColDiv}`}>
                                        <label htmlFor="nursesInputField" className="form-label">Nurses</label>
                                        <input type="text" className="form-control" id="nursesInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="facilitiesInputField" className="form-label">Facilities / Equipment</label>
                                        <input type="text" className="form-control" id="facilitiesInputField" />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="notesInputField" className="form-label">Notes / comments</label>
                                        <input type="text" className="form-control" id="notesInputField" />
                                    </div>
                                </div>

                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add Ward</button>
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
