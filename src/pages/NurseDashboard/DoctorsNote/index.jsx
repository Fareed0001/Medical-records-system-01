import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/NurseSidebar/Sidebar';
import Navbar from '@/components/Navbar/NurseNavbar/NurseNavbar';
import styles from "@/pages/NurseDashboard/Styles.module.css";
import { BiSearch } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { MdScheduleSend } from "react-icons/md";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { patientData } from "@/components/Data/PatientData";
import Link from "next/link";

const ROWS_PER_PAGE = 5;

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const [patients, setPatients] = useState([...patientData]);

    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, patients.length);

    const filteredPatients = patients
        .filter(patient => patient.doctorsNote.requestTitle) // Only include patients with the "ward" object
        .filter(patient =>
            patient.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            patient.medicalRecordNumber.toLowerCase().includes(searchInput.toLowerCase())
        );

    const patientPageData = filteredPatients.slice(startIndex, endIndex);

    const handleDeleteClick = (patientId) => {
        const updatedPatients = patients.filter(patient => patient.medicalRecordNumber !== patientId);
        setPatients(updatedPatients);
    };

    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredPatients.length / ROWS_PER_PAGE)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [patients, searchInput]);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Inpatients</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name or hospital number"
                                    aria-label="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-primary" type="submit"><BiSearch /></button>
                            </form>
                        </div>
                        <div className={`col-6 ${styles.nextPageDiv}`}>
                            <p>Total <span className={styles.nextPageSpan}>{filteredPatients.length}</span></p>
                            <p onClick={handlePrevPageClick}><GrFormPreviousLink className={styles.nextPrevIcon} /> <span className={styles.nextPageSpan}>{currentPage}</span></p>
                            <p onClick={handleNextPageClick}><GrFormNextLink className={styles.nextPrevIcon} /></p>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="menu0" role="tabpanel" aria-labelledby="menu0-tab">
                            <div className={styles.contentTable}>
                                <div className={`container ${styles.contentTableHead}`}>
                                    <div className="row">
                                        <div className='col-1'>#</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>Hospital Number</div>
                                        <div className='col-8 col-sm-5 col-lg-4'>Name</div>
                                        <div className='col-2 d-none d-lg-block'>Phone</div>
                                        <div className='col-3 col-sm-2 col-lg-2'>Doctors note</div>
                                    </div>
                                </div>
                                {patientPageData.map((patient, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={patient.medicalRecordNumber}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>{patient.medicalRecordNumber}</div>
                                            <div className='col-8 col-sm-5 col-lg-4'>{patient.name}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.phone}</div>
                                            <div className='col-3 col-sm-2 col-lg-2'>
                                                <MdScheduleSend
                                                    className={styles.penIcon}
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#staticBackdrop-${patient.medicalRecordNumber}`} // Use a unique identifier
                                                />
                                                <div className="modal fade" id={`staticBackdrop-${patient.medicalRecordNumber}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel-${patient.medicalRecordNumber}`} aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id={`staticBackdropLabel-${patient.medicalRecordNumber}`}>{patient.name}</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="mb-3">
                                                                    <p><strong>Request title:</strong> {patient.doctorsNote.requestTitle}</p>
                                                                </div>
                                                                <hr />
                                                                <div className="mb-3">
                                                                    <p><strong>Request content:</strong> {patient.doctorsNote.requestContent}</p>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <Link href={`/NurseDashboard/DoctorsNote/${patient.medicalRecordNumber}`}>
                                                                    <button type="button" className="btn btn-secondary">Bio-data</button>
                                                                </Link>
                                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <BsTrashFill
                                                    className={styles.binIcon}
                                                    onClick={() => handleDeleteClick(patient.medicalRecordNumber)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
