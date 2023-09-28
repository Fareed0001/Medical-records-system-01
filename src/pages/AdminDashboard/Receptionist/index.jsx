import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/AdminSidebar/Sidebar';
import Navbar from '@/components/Navbar/AdminNavbar/Navbar';
import styles from "@/pages/AdminDashboard/Styles.module.css";
import { BiSearch, BiSolidEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { receptionistData } from "@/components/Data/ReceptionistData";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the total number of receptionists
    const [totalReceptionists, setTotalReceptionists] = useState(receptionistData.length);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the form input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        name: '',
        email: '',
        employmentType: '',
        notesResponsibilities: '',
        gender: '',
        address: '',
        phone: '',
        shift: '', // Add shift field
        password: '',
    });

    // State for the list of receptionists
    const [receptionists, setReceptionists] = useState([...receptionistData]);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, totalReceptionists);

    // Filter the receptionists based on the search input
    const filteredReceptionists = receptionists.filter(receptionist =>
        receptionist.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        receptionist.employmentType.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered receptionists to get the rows for the current page
    const receptionistPageData = filteredReceptionists.slice(startIndex, endIndex);

    // Function to handle the delete action when the trash icon is clicked
    const handleDeleteClick = (receptionistId) => {
        // Remove the receptionist with the specified id
        const updatedReceptionists = receptionists.filter(receptionist => receptionist.id !== receptionistId);

        // Update the total number of receptionists
        setTotalReceptionists(updatedReceptionists.length);

        // Update the receptionists list
        setReceptionists(updatedReceptionists);
    };

    // Function to handle form input change
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add the new receptionist to the list
        if (
            formData.firstName &&
            formData.lastName &&
            formData.name &&
            formData.email &&
            formData.employmentType &&
            formData.shift // Make sure shift is required
        ) {
            const newReceptionist = {
                ...formData,
                id: totalReceptionists + 1, // Assign a unique ID
            };

            // Update the total number of receptionists
            setTotalReceptionists(totalReceptionists + 1);

            // Update the receptionists list
            setReceptionists([...receptionists, newReceptionist]);

            // Clear the form
            setFormData({
                firstName: '',
                lastName: '',
                name: '',
                email: '',
                employmentType: '',
                notesResponsibilities: '',
                gender: '',
                address: '',
                phone: '',
                shift: '',
                password: '',
            });
        }
    };

    // Function to handle the "Next" button click
    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredReceptionists.length / ROWS_PER_PAGE)) {
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

    // Reset the current page and filtered data when the receptionists or search input changes
    useEffect(() => {
        setCurrentPage(1);
    }, [receptionists, searchInput]);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}
                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Receptionists</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Receptionist</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name or employment type"
                                    aria-label="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-primary" type="submit"><BiSearch /></button>
                            </form>
                        </div>
                        <div className={`col-6 ${styles.nextPageDiv}`}>
                            <p>Total <span className={styles.nextPageSpan}>{filteredReceptionists.length}</span></p>
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
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Employment / Shift</div>
                                        <div className='col-2 d-none d-lg-block'>Phone</div>
                                        <div className='col-3 d-none d-lg-block'>Email</div>
                                        <div className='col-3 col-sm-2'>Option</div>
                                    </div>
                                </div>
                                {/* Map receptionistPageData and generate table rows */}
                                {receptionistPageData.map((receptionist, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={receptionist.id}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='col-8 col-sm-4 col-lg-2'>{receptionist.name}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>{`${receptionist.employmentType} / ${receptionist.shift}`}</div>
                                            <div className='col-2 d-none d-lg-block'>{receptionist.phone}</div>
                                            <div className='col-3 d-none d-lg-block'>{receptionist.email}</div>
                                            <div className='col-3 col-sm-2'>
                                                <BiSolidEditAlt className={styles.penIcon} />
                                                <BsTrashFill
                                                    className={styles.binIcon}
                                                    onClick={() => handleDeleteClick(receptionist.id)}
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
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="emailInputField" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInputField"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="employmentInputField" className="form-label">Employment type / Shift</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="employmentInputField"
                                            name="employmentType"
                                            value={formData.employmentType}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="notesInputField" className="form-label">Notes / Responsibilities</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="notesInputField"
                                            name="notesResponsibilities"
                                            value={formData.notesResponsibilities}
                                            onChange={handleFormInputChange}
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
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="phoneInputField" className="form-label">Phone</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phoneInputField"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                    <div className={`col-md-2 ${styles.formColDiv}`}>
                                        <label htmlFor="shiftInputField" className="form-label">Shift</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="shiftInputField"
                                            name="shift"
                                            value={formData.shift}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="passwordInputField" className="form-label">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="passwordInputField"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add Receptionist</button>
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
