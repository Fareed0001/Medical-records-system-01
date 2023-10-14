import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/NurseSidebar/Sidebar';
import Navbar from '@/components/Navbar/NurseNavbar/NurseNavbar';
import styles from "@/pages/NurseDashboard/Styles.module.css";
import { BiSearch } from "react-icons/bi";
import { MdHistoryEdu } from "react-icons/md";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { patientData } from "@/components/Data/PatientData";
import Link from "next/link";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the list of patients
    const [patients, setPatients] = useState([...patientData]);

    // Function to filter patients with wards only
    const patientsWithWards = patients.filter(patient => patient.ward);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, patientsWithWards.length);

    // Filter the patients based on the search input for name, hospital number, or ward type
    const filteredPatients = patientsWithWards.filter(patient =>
        patient.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        patient.medicalRecordNumber.toLowerCase().includes(searchInput.toLowerCase()) ||
        patient.ward.wardType.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered patients to get the rows for the current page
    const patientPageData = filteredPatients.slice(startIndex, endIndex);  

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

    // Function to handle search input change
    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1); // Reset to the first page when searching
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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Admitted Patients</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Admit patient</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name, hospital number or ward"
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
                                        <div className='col-2 d-none d-lg-block'>Bed number</div>
                                        <div className='col-2 d-none d-lg-block'>Ward</div>
                                        <div className='col-3 col-sm-1'>Data</div>
                                    </div>
                                </div>
                                {/* Map patientPageData and generate table rows */}
                                {patientPageData.map((patient, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={patient.medicalRecordNumber}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>{patient.medicalRecordNumber}</div>
                                            <div className='col-8 col-sm-5 col-lg-3'>{patient.name}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.ward.capacity}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.ward.wardType}</div>
                                            <div className='col-3 col-sm-2 col-lg-1'>
                                            <MdHistoryEdu
                                                className={styles.historyIcon}
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
                                                        
                                                        <strong>Bed number:</strong>
                                                        {patient.ward.capacity}
                                                        <hr />      
                                                        <strong>Ward:</strong>
                                                        {patient.ward.wardType}
                                                        <hr />     
                                                        <strong>Ward name:</strong>
                                                        {patient.ward.name}
                                                        <hr />     
                                                        <strong>Operation time:</strong>
                                                        {patient.ward.operatingTime}
                                                        <hr />     
                                                        <strong>Manager:</strong>
                                                        {patient.ward.manager}
                                                        <hr />     
                                                        <strong>Ward nurses:</strong>
                                                        {patient.ward.nurses}
                                                        <hr />     
                                                        <strong>Equipment available:</strong>
                                                        {patient.ward.facilitiesEquipment}
                                                        <hr />     
                                                        <strong>Ward description:</strong>
                                                        {patient.ward.description}                                                                             
                                                    </div>
                                                        <div className="modal-footer">
                                                            <Link href={`/NurseDashboard/Admission/${patient.medicalRecordNumber}`}>
                                                                <button type="button" className="btn btn-secondary">Bio-data</button>
                                                            </Link>
                                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Discharge</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* End of mapping */}
                            </div>
                        </div>

                        <div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="menu1-tab">
                            <form className={styles.form} onSubmit={handleFormSubmit}>
                                <div className='row'>
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="wardName" className="form-label">Ward Type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wardName"
                                            name="wardName"
                                            value={formData.wardType}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="appointmentDate" className="form-label">Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="appointmentDate"
                                            name="appointmentDate"
                                            value={formData.appointmentDate}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="disease" className="form-label">Disease</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="disease"
                                            name="disease"
                                            value={formData.disease}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add patient</button>
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
