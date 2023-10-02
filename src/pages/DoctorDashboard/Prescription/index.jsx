import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/DoctorSidebar/Sidebar';
import Navbar from '@/components/Navbar/DoctorNavbar/DoctorNavbar';
import styles from "@/pages/DoctorDashboard/Styles.module.css";
import { BiSearch, BiSolidEditAlt } from "react-icons/bi";
import { BsTrashFill, BsFillEyeFill } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { AppointmentData } from "@/components/Data/AppointmentData";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the total number of appointments
    const [totalAppointments, setTotalAppointments] = useState(AppointmentData.length);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the form input values
    const [formData, setFormData] = useState({
        name: '',
        physician: '',
        date: '',
        disease: '',
    });

    // State for the list of appointments
    const [appointments, setAppointments] = useState([...AppointmentData]);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, totalAppointments);

    // Filter the appointments based on the search input
    const filteredAppointments = appointments.filter(appointment =>
        appointment.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        appointment.physician.toLowerCase().includes(searchInput.toLowerCase()) ||
        appointment.disease.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered appointments to get the rows for the current page
    const appointmentPageData = filteredAppointments.slice(startIndex, endIndex);

    // Function to handle the delete action when the trash icon is clicked
    const handleDeleteClick = (appointmentId) => {
        // Remove the appointment with the specified id
        const updatedAppointments = appointments.filter(appointment => appointment.id !== appointmentId);

        // Update the total number of appointments
        setTotalAppointments(updatedAppointments.length);

        // Update the appointments list
        setAppointments(updatedAppointments);
    };

    // Function to handle form input change
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add the new appointment to the list
        if (
            formData.name &&
            formData.physician &&
            formData.phone &&
            formData.date &&
            formData.disease
        ) {
            const newAppointment = {
                ...formData,
                id: totalAppointments + 1, // Assign a unique ID
            };

            // Update the total number of appointments
            setTotalAppointments(totalAppointments + 1);

            // Update the appointments list
            setAppointments([...appointments, newAppointment]);

            // Clear the form
            setFormData({
                name: '',
                physician: '',
                phone: '',
                date: '',
                disease: '',
            });
        }
    };

    // Function to handle the "Next" button click
    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredAppointments.length / ROWS_PER_PAGE)) {
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

    // Reset the current page and filtered data when the appointments or search input changes
    useEffect(() => {
        setCurrentPage(1);
    }, [appointments, searchInput]);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}

                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Prescription</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Prescription</a>
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
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Physician</div>
                                        <div className='col-2 d-none d-lg-block'>Date</div>
                                        <div className='col-2 d-none d-lg-block'>Disease</div>
                                        <div className='col-3 col-sm-2'>Option</div>
                                    </div>
                                </div>
                                {/* Map appointmentPageData and generate table rows */}
                                {appointmentPageData.map((appointment, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={appointment.id}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='col-8 col-sm-4 col-lg-3'>{appointment.name}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>{appointment.physician}</div>
                                            <div className='col-2 d-none d-lg-block'>{appointment.date}</div>
                                            <div className='col-2 d-none d-lg-block'>{appointment.disease}</div>
                                            <div className='col-3 col-sm-2'>
                                                <BsFillEyeFill className={styles.eyeIcon} />
                                                <BiSolidEditAlt className={styles.penIcon} />
                                                <BsTrashFill
                                                    className={styles.binIcon}
                                                    onClick={() => handleDeleteClick(appointment.id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* End of mapping */}
                            </div>
                        </div>

                        <div className="tab-pane fade" id="menu1" role="tabpanel" aria-labelledby="menu1-tab">
                            <form className={styles.doctorForm} onSubmit={handleFormSubmit}>
                                    <h4>Add Prescription</h4>
                                    <hr />
                                <div className='row'>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="name" className="form-label">Patient's name</label>
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
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="physician" className="form-label">Physician</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="physician"
                                            name="physician"
                                            value={formData.physician}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-12 ${styles.formColDiv}`}>
                                        <label htmlFor="history" className="form-label">Case history</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            id="history"
                                            name="textarea"
                                            value={formData.textarea}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-12 ${styles.formColDiv}`}>
                                        <label htmlFor="ailment" className="form-label">Ailment / Desription</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            id="ailment"
                                            name="textarea"
                                            value={formData.textarea}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-12 ${styles.formColDiv}`}>
                                        <label htmlFor="medication" className="form-label">Medication</label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            id="medication"
                                            name="mediacation"
                                            value={formData.mediacation}
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
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="Amount" className="form-label">Amount</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="Amount"
                                            name="amount"
                                            value={formData.amount}
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
                                </div>
                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add prescription</button>
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
