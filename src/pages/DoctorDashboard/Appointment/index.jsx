import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/DoctorSidebar/Sidebar';
import Navbar from '@/components/Navbar/DoctorNavbar/DoctorNavbar';
import styles from "@/pages/DoctorDashboard/Styles.module.css";
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
        primaryCarePhysician: '',
        phone: '',
        appointmentDate: '',
        disease: '',
    });

    const filteredAppointments = patients
        .filter(patient => patient.disease) // Only include patients with the "disease" object
        .filter(patient =>
            patient.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            patient.primaryCarePhysician.toLowerCase().includes(searchInput.toLowerCase()) ||
            patient.disease.toLowerCase().includes(searchInput.toLowerCase())
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
            formData.primaryCarePhysician &&
            formData.phone &&
            formData.appointmentDate &&
            formData.disease
        ) {
            const newPatient = {
                ...formData,
                medicalRecordNumber: `MRN00${patients.length + 1}`,
            };
            setPatients([...patients, newPatient]);
            setFormData({
                name: '',
                primaryCarePhysician: '',
                appointmentDate: '',
                disease: '',
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
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Appointments</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Appointment</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name, physician, or disease"
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
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>Doctor</div>
                                        <div className='col-2 d-none d-lg-block'>Date</div>
                                        <div className='col-2 d-none d-lg-block'>Disease</div>
                                        <div className='col-3 col-sm-1'>Option</div>
                                    </div>
                                </div>
                                {patientPageData.map((patient, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={patient.medicalRecordNumber}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='col-8 col-sm-5 col-lg-3'>{patient.name}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-3'>{patient.primaryCarePhysician}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.appointmentDate}</div>
                                            <div className='col-2 d-none d-lg-block'>{patient.disease}</div>
                                            <div className='col-3 col-sm-2 col-lg-1'>
                                                <Link href={`/DoctorDashboard/Appointment/${patient.medicalRecordNumber}`}>
                                                    <MdHistoryEdu className={styles.penIcon} />
                                                </Link>
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
                                        <label htmlFor="primaryCarePhysician" className="form-label">Physician</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="primaryCarePhysician"
                                            name="primaryCarePhysician"
                                            value={formData.primaryCarePhysician}
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
            </div>
        </div>
    );
}

export default Index;
