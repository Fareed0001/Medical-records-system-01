import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/NurseSidebar/Sidebar';
import Navbar from '@/components/Navbar/NurseNavbar/NurseNavbar';
import styles from "@/pages/NurseDashboard/Styles.module.css";
import { BiSearch } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { MdHistoryEdu } from "react-icons/md";
import { patientData } from "@/components/Data/PatientData";
import Link from "next/link";

const ROWS_PER_PAGE = 5;

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const [patients, setPatients] = useState([...patientData]);

    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, patients.length);

    const [formData, setFormData] = useState({
        name: '',
        temperature: '',
        urineOutput: '',
        date: '',
        summary: '',
        notes: '',
        bloodPressure: '',
        pulseRate: '',
        weight: '',
        health: '',
        height: '',
    });

    const filteredAppointments = patients
        .filter(patient => patient.nursesNote) // Only include patients with the "nursesNote" object
        .filter(patient =>
            patient.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            patient.primaryCarePhysician.toLowerCase().includes(searchInput.toLowerCase())
        );

    const patientPageData = filteredAppointments.slice(startIndex, endIndex);

    const handleDeleteClick = (patientId) => {
        const updatedPatients = patients.filter(patient => patient.medicalRecordNumber !== patientId);
        setPatients(updatedPatients);
    };

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (
            formData.name &&
            formData.temperature &&
            formData.urineOutput &&
            formData.date &&
            formData.summary &&
            formData.notes &&
            formData.bloodPressure &&
            formData.pulseRate &&
            formData.weight &&
            formData.health &&
            formData.height 
        ) {
            const newPatient = {
                ...formData,
                medicalRecordNumber: `MRN00${patients.length + 1}`,
            };
            setPatients([...patients, newPatient]);
            setFormData({
                name: '',
                temperature: '',
                urineOutput: '',
                date: '',
                summary: '',
                notes: '',
                bloodPressure: '',
                pulseRate: '',
                weight: '',
                health: '',
                height: '',
            });
        }
    };

    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredAppointments.length / ROWS_PER_PAGE)) {
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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Nurses Notes</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">New Note</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name or physician"
                                    aria-label="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-primary" type="submit"><BiSearch /></button>
                            </form>
                        </div>
                        <div className={`col-6 ${styles.nextPageDiv}`}>
                            <p>Total <span className={styles.nextPageSpan}>{filteredAppointments.length}</span></p>
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
                                        <div className='col-8 col-sm-5 col-lg-3'>Patient</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>Temperature</div>
                                        <div className='col-2 d-none d-lg-block'>Urine Output</div>
                                        <div className='col-2 d-none d-lg-block'>Date</div>
                                        <div className='col-3 col-sm-1'>Option</div>
                                    </div>
                                </div>
                                {patientPageData.map((patient, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={patient.medicalRecordNumber}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='col-8 col-sm-5 col-lg-3'>{patient.name}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>{patient.nursesNote.temperature}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.nursesNote.urineOutput}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.nursesNote.date}</div>
                                            <div className='col-3 col-sm-2 col-lg-1'>
                                                <MdHistoryEdu
                                                    className={styles.penIcon}
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#staticBackdrop-${patient.medicalRecordNumber}`}
                                                />
                                                <div className="modal fade" id={`staticBackdrop-${patient.medicalRecordNumber}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel-${patient.medicalRecordNumber}`} aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id={`staticBackdropLabel-${patient.medicalRecordNumber}`}>{patient.name}</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <strong>Date: </strong>
                                                                {patient.nursesNote.date}
                                                                <hr />
                                                                <strong>Patient temperature: </strong>
                                                                {patient.nursesNote.temperature}
                                                                <hr />
                                                                <strong>Urine output: </strong>
                                                                {patient.nursesNote.urineOutput}
                                                                <hr />
                                                                <strong>Nurses Notes: </strong>
                                                                {patient.nursesNote.notes}
                                                                <hr />
                                                                <strong>Summary: </strong>
                                                                {patient.nursesNote.summary}
                                                            </div>
                                                            <div className="modal-footer">
                                                                <Link href={`/NurseDashboard/NursesNote/${patient.medicalRecordNumber}`}>
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
                        <div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="menu1-tab">
                            <form className={styles.form} onSubmit={handleFormSubmit}>
                                <div className='row'>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="name" className="form-label">Patient List</label>
                                        <select
                                            className="form-select"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormInputChange}
                                            aria-label="Default select example"
                                            required
                                        >
                                            <option value="" disabled>Select a patient</option>
                                            {patients.map((patient, index) => (
                                                <option key={patient.medicalRecordNumber} value={patient.name}>
                                                    {patient.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="temperature" className="form-label">Patient temperature</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="temperature"
                                            name="temperature"
                                            value={formData.temperature}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="date" className="form-label">Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="bloodPressure" className="form-label">Blood Pressure</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="bloodPressure"
                                            name="bloodPressure"
                                            value={formData.bloodPressure}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="pulseRate" className="form-label">Pulse rate</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="pulseRate"
                                            name="pulseRate"
                                            value={formData.pulseRate}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="weight" className="form-label">Weight</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="weight"
                                            name="weight"
                                            value={formData.weight}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="height" className="form-label">Height</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="height"
                                            name="height"
                                            value={formData.height}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-12 ${styles.formColDiv}`}>
                                        <label htmlFor="health" className="form-label">Health</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="health"
                                            name="health"
                                            value={formData.health}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="urineOutput" className="form-label">Urine output</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            id="urineOutput"
                                            name="urineOutput"
                                            value={formData.urineOutput}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="summary" className="form-label">Summary</label>
                                        <textarea
                                            type="summary"
                                            className="form-control"
                                            id="summary"
                                            name="summary"
                                            value={formData.summary}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-12 ${styles.formColDiv}`}>
                                        <label htmlFor="notes" className="form-label">Notes</label>
                                        <textarea
                                            type="notes"
                                            className="form-control"
                                            id="notes"
                                            name="notes"
                                            value={formData.notes}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add note</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
