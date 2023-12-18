import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/CashierSidebar/Sidebar';
import Navbar from '@/components/Navbar/CashierNavbar/CashierNavbar';
import styles from "@/pages/CashierDashboard/Styles.module.css";
import { BiSearch } from "react-icons/bi";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { MdScheduleSend } from "react-icons/md";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { PaymentData } from "@/components/Data/PaymentData";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the total number of patients
    const [totalPatients, setTotalPatients] = useState(PaymentData.length);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the list of patients
    const [patients, setPatients] = useState([...PaymentData]);

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

    // Handle delete
    const handleDeleteClick = (patientId) => {
        const updatedPatients = patients.filter(patient => patient.medicalRecordNumber !== patientId);
        setPatients(updatedPatients);
    };
    // Function to handle form input change
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
    // Move the variables inside the loop where you are mapping through patientPageData
    const fwConfigArray = patientPageData.map((patient) => {
        const name = patient.name;
        const email = patient.email;
        const phone = patient.phone;
        const amount = patient.amount;

        const config = {
            public_key: 'FLWPUBK_TEST-02b9b5fc6406bd4a41c3ff141cc45e93-X',
            tx_ref: Date.now(),
            amount: amount,
            currency: 'NGN',
            payment_options: 'card,mobilemoney,ussd',
            customer: {
                email: email,
                phone_number: phone,
                name: name,
            },
            customizations: {
                title: 'Moreed',
                description: 'Patient Billing Statement',
                logo: 'https://www.moreed.ng/assets/img/images/favicon.png',
            },
        };

        return {
            ...config,
            text: 'Pay now',
            callback: (response) => {
                console.log(response);
                closePaymentModal();
            },
            onClose: () => { },
        };
    });
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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Patient</a>
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
                                        <div className='col-2 d-none d-lg-block'>Amount due</div>
                                        <div className='col-3 col-sm-2 col-lg-1'>Invoice</div>
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
                                            <div className='col-2 d-none d-lg-block'>₦{patient.amount}</div>
                                            <div className='col-3 col-sm-2 col-lg-1'>
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
                                                                    <p><strong>Payment for: </strong> Doctors consultation, lab test and prescribed medication</p>
                                                                </div>
                                                                <hr />
                                                                <div className="mb-3">
                                                                    <strong>Total amount due:</strong> ₦{patient.amount}
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary" onClick={() => handleDeleteClick(patient.medicalRecordNumber)} data-bs-dismiss="modal">Paid</button>
                                                                <FlutterWaveButton
                                                                    type="button"
                                                                    className="btn btn-warning"
                                                                    data-bs-dismiss="modal"
                                                                    {...fwConfigArray[index]}
                                                                />
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
                    </div>
                </div>
                {/* body content end */}
            </div>
        </div>
    );
}

export default Index;
