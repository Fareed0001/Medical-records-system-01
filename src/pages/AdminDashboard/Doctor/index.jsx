import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/AdminSidebar/Sidebar';
import Navbar from '@/components/Navbar/AdminNavbar/Navbar';
import styles from "@/pages/AdminDashboard/Styles.module.css";
import { BiSearch, BiSolidEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { DoctorData } from "@/components/Data/DoctorData";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the total number of doctors
    const [totalDoctors, setTotalDoctors] = useState(DoctorData.length);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the form input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        address: '',
        dateOfBirth: '',
        division: '',
        gender: '',
        nigerianPhoneNumber: '',
        password: ''
    });

    // State for the list of doctors
    const [doctors, setDoctors] = useState([...DoctorData]);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, totalDoctors);

    // Filter the doctors based on the search input
    const filteredDoctors = doctors.filter(doctor =>
        doctor.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(searchInput.toLowerCase()) ||
        doctor.department.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered doctors to get the rows for the current page
    const doctorPageData = filteredDoctors.slice(startIndex, endIndex);

    // Function to handle the delete action when the trash icon is clicked
    const handleDeleteClick = (doctorId) => {
        // Remove the doctor with the specified id
        const updatedDoctors = doctors.filter(doctor => doctor.id !== doctorId);

        // Update the total number of doctors
        setTotalDoctors(updatedDoctors.length);

        // Update the doctors list
        setDoctors(updatedDoctors);
    };

    // Function to handle form input change
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add the new doctor to the list
        if (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.department
        ) {
            const newDoctor = {
                ...formData,
                id: totalDoctors + 1, // Assign a unique ID
            };

            // Update the total number of doctors
            setTotalDoctors(totalDoctors + 1);

            // Update the doctors list
            setDoctors([...doctors, newDoctor]);

            // Clear the form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                department: '',
                address: '',
                dateOfBirth: '',
                division: '',
                gender: '',
                nigerianPhoneNumber: '',
                password: '',
            });
        }
    };

    // Function to handle the "Next" button click
    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredDoctors.length / ROWS_PER_PAGE)) {
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

    // Reset the current page and filtered data when the doctors or search input changes
    useEffect(() => {
        setCurrentPage(1);
    }, [doctors, searchInput]);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}

                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Doctors</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Doctor</a>
                        </li>
                    </ul>

                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name or department"
                                    aria-label="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-primary" type="submit"><BiSearch /></button>
                            </form>
                        </div>
                        <div className={`col-6 ${styles.nextPageDiv}`}>
                            <p>Total <span className={styles.nextPageSpan}>{filteredDoctors.length}</span></p>
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
                                        <div className='col-8 col-sm-4 col-lg-2'>Name</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Department</div>
                                        <div className='col-2 d-none d-lg-block'>Phone</div>
                                        <div className='col-3 d-none d-lg-block'>Email</div>
                                        <div className='col-3 col-sm-2'>Option</div>
                                    </div>
                                </div>
                                {/* Map doctorPageData and generate table rows */}
                                {doctorPageData.map((doctor, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={doctor.id}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='col-8 col-sm-4 col-lg-2'>{doctor.firstName} {doctor.lastName}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>{doctor.department}</div>
                                            <div className='col-2 d-none d-lg-block'>{doctor.nigerianPhoneNumber}</div>
                                            <div className='col-3 d-none d-lg-block'>{doctor.email}</div>
                                            <div className='col-3 col-sm-2'>
                                                <BiSolidEditAlt className={styles.penIcon} />
                                                <BsTrashFill
                                                    className={styles.binIcon}
                                                    onClick={() => handleDeleteClick(doctor.id)}
                                                />
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
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="department" className="form-label">Department</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="department"
                                            name="department"
                                            value={formData.department}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="gender" className="form-label">Gender</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="gender"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                    <div className={`col-md-10 ${styles.formColDiv}`}>
                                        <label htmlFor="address" className="form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="nigerianPhoneNumber" className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nigerianPhoneNumber"
                                            name="nigerianPhoneNumber"
                                            value={formData.nigerianPhoneNumber}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add doctor</button>
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
