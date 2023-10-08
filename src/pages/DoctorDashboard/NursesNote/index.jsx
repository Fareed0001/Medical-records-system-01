import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/DoctorSidebar/Sidebar';
import Navbar from '@/components/Navbar/DoctorNavbar/Navbar';
import styles from "@/pages/DoctorDashboard/Styles.module.css";
import { BiSearch } from "react-icons/bi";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { MdHistoryEdu } from "react-icons/md";
import { patientData } from "@/components/Data/PatientData";

const ROWS_PER_PAGE = 4; // Number of rows to display per page

const Index = () => {
    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the list of patients
    const [patients, setPatients] = useState([...patientData]);

    // Function to filter patients with nurses only
    const patientsWithNurses = patients.filter(patient => patient.nursesNote);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, patientsWithNurses.length);

    // Filter the patients based on the search input for name, date, or temperature
    const filteredPatients = patientsWithNurses.filter(patient =>
        patient.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        patient.nurse.nursesNote.date.toLowerCase().includes(searchInput.toLowerCase()) ||
        patient.nurse.nursesNote.temperature.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered patients to get the rows for the current page
    const patientPageData = filteredPatients.slice(startIndex, endIndex);  

    // Function to handle search input change
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching
    };

    // Function to handle the "Next" button click
    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredPatients.length / ROWS_PER_PAGE)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Function to handle the "Previous" button click
    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Reset the current page and filtered data when the patients or search input changes
    useEffect(() => {
        setCurrentPage(1);
    }, [patients, searchInput]);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}
                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Nurses notes</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name, date, or temperature"
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
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>Hospital number</div>
                                        <div className='col-8 col-sm-5 col-lg-3'>Patient</div>
                                        <div className='col-2 d-none d-lg-block'>Date</div>
                                        <div className='col-2 d-none d-lg-block'>Summary</div>
                                        <div className='col-3 col-sm-1'>Note</div>
                                    </div>
                                </div>
                                {/* Map patientPageData and generate table rows */}
                                {patientPageData.map((patient, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={patient.id}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>{patient.medicalRecordNumber}</div>
                                            <div className='col-8 col-sm-5 col-lg-3'>{patient.name}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.nursesNote.date}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.nursesNote.summary}</div>
                                            <div className='col-3 col-sm-2 col-lg-1'>
                                                <MdHistoryEdu className={styles.historyIcon} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* End of mapping */}
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
