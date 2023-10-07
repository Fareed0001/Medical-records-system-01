import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/DoctorSidebar/Sidebar';
import Navbar from '@/components/Navbar/DoctorNavbar/DoctorNavbar';
import styles from "@/pages/DoctorDashboard/Styles.module.css";
import { BiSearch } from "react-icons/bi";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { MdHistoryEdu } from "react-icons/md"
import { patientData } from "@/components/Data/PatientData";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the total number of patients
    const [totalPatients, setTotalPatients] = useState(patientData.length);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the form input values
    const [formData, setFormData] = useState({
        medicalRecordNumber: '',
        name: '',
        gender: '',
        dateOfBirth: '',
        primaryCarePhysician: '',
        allergies: '',
        phone: '',
        bloodGroup: '',
        address: '',
    });

    // State for the list of patients
    const [patients, setPatients] = useState([...patientData]);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, totalPatients);

    // Filter the patients based on the search input for name and department
    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        patient.medicalRecordNumber.toLowerCase().includes(searchInput.toLowerCase()) ||
        patient.primaryCarePhysician.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered patients to get the rows for the current page
    const patientPageData = filteredPatients.slice(startIndex, endIndex);

    // Function to handle form input change
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Map form data to patient properties
        const newPatient = {
            medicalRecordNumber: formData.medicalRecordNumber,
            name: formData.name,
            gender: formData.gender,
            dateOfBirth: formData.dateOfBirth,
            primaryCarePhysician: formData.primaryCarePhysician,
            allergies: formData.allergies,
            phone: formData.phone,
            bloodGroup: formData.bloodGroup,
            address: formData.address,
        };

        // Add the new patient to the list
        if (
            formData.medicalRecordNumber &&
            formData.name &&
            formData.primaryCarePhysician &&
            formData.phone
        ) {
            // Update the total number of patients
            setTotalPatients(totalPatients + 1);

            // Update the patients list
            setPatients([...patients, newPatient]);

            // Clear the form
            setFormData({
                medicalRecordNumber: '',
                name: '',
                gender: '',
                dateOfBirth: '',
                primaryCarePhysician: '',
                allergies: '',
                phone: '',
                bloodGroup: '',
                address: '',
            });
        }
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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Patients</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Patient</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by hospital number, name or doctor"
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
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Hospital Number</div>
                                        <div className='col-8 col-sm-5 col-lg-3'>Name</div>
                                        <div className='col-2 d-none d-lg-block'>Phone</div>
                                        <div className='col-1 d-none d-lg-block'>Gender</div>
                                        <div className='col-2 d-none d-lg-block'>Date of Birth</div>
                                        <div className='col-3 col-sm-2 col-lg-1'>Option</div>
                                    </div>
                                </div>
                                {/* Map patientPageData and generate table rows */}
                                {patientPageData.map((patient, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={patient.medicalRecordNumber}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>{patient.medicalRecordNumber}</div>
                                            <div className='col-8 col-sm-5 col-lg-3'>{patient.name}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.phone}</div>
                                            <div className='col-1 d-none d-lg-block'>{patient.gender}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.dateOfBirth}</div>
                                            <div className='col-3 col-sm-2 col-lg-1'>
                                                <MdHistoryEdu className={styles.historyIcon} />
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
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="recordInputField" className="form-label">Medical Record Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="recordInputField"
                                            name="medicalRecordNumber"
                                            value={formData.medicalRecordNumber}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="nameInputField" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nameInputField"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="genderInputField" className="form-label">Gender</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="genderInputField"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="dobInputField" className="form-label">Date of Birth</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="dobInputField"
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="physicianInputField" className="form-label">Primary Care Physician</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="physicianInputField"
                                            name="primaryCarePhysician"
                                            value={formData.primaryCarePhysician}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-4 ${styles.formColDiv}`}>
                                        <label htmlFor="allergiesInputField" className="form-label">Allergies</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="allergiesInputField"
                                            name="allergies"
                                            value={formData.allergies}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="phoneInputField" className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phoneInputField"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="bloodInputField" className="form-label">Blood group</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="bloodInputField"
                                            name="bloodGroup"
                                            value={formData.bloodGroup}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                    <div className={`col-md-10 ${styles.formColDiv}`}>
                                        <label htmlFor="addressInputField" className="form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="addressInputField"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add Patient</button>
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
