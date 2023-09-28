import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/AdminSidebar/Sidebar';
import Navbar from '@/components/Navbar/AdminNavbar/Navbar';
import styles from "@/pages/AdminDashboard/Styles.module.css";
import { BiSearch, BiSolidEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { accountantData } from "@/components/Data/AccountantData";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the total number of accountants
    const [totalAccountants, setTotalAccountants] = useState(accountantData.length);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the form input values
    const [formData, setFormData] = useState({
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

    // State for the list of accountants
    const [accountants, setAccountants] = useState([...accountantData]);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, totalAccountants);

    // Filter the accountants based on the search input for name and department
    const filteredAccountants = accountants.filter(accountant =>
        accountant.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        accountant.employmentType.toLowerCase().includes(searchInput.toLowerCase())
    );


    // Slice the filtered accountants to get the rows for the current page
    const accountantPageData = filteredAccountants.slice(startIndex, endIndex);

    // Function to handle the delete action when the trash icon is clicked
    const handleDeleteClick = (accountId) => {
        // Remove the accountant with the specified id
        const updatedAccountants = accountants.filter(accountant => accountant.id !== accountId);

        // Update the total number of accountants
        setTotalAccountants(updatedAccountants.length);

        // Update the accountants list
        setAccountants(updatedAccountants);
    };

    // Function to handle form input change
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Map form data to accountant properties
        const newAccountant = {
            id: totalAccountants + 1,
            ...formData,
        };

        // Add the new accountant to the list
        if (
            formData.name &&
            formData.email &&
            formData.employmentType &&
            formData.shift
        ) {
            // Update the total number of accountants
            setTotalAccountants(totalAccountants + 1);

            // Update the accountants list
            setAccountants([...accountants, newAccountant]);

            // Clear the form
            setFormData({
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
        if (currentPage < Math.ceil(filteredAccountants.length / ROWS_PER_PAGE)) {
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

    // Reset the current page and filtered data when the accountants or search input changes
    useEffect(() => {
        setCurrentPage(1);
    }, [accountants, searchInput]);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}
                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Accountants</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Accountant</a>
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
                            <p>Total <span className={styles.nextPageSpan}>{filteredAccountants.length}</span></p>
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
                                {/* Map accountantPageData and generate table rows */}
                                {accountantPageData.map((accountant, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={accountant.id}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='col-8 col-sm-4 col-lg-2'>{accountant.name}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>{`${accountant.employmentType} / ${accountant.shift}`}</div>
                                            <div className='col-2 d-none d-lg-block'>{accountant.phone}</div>
                                            <div className='col-3 d-none d-lg-block'>{accountant.email}</div>
                                            <div className='col-3 col-sm-2'>
                                                <BiSolidEditAlt className={styles.penIcon} />
                                                <BsTrashFill
                                                    className={styles.binIcon}
                                                    onClick={() => handleDeleteClick(accountant.id)}
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
                                        <label htmlFor="notesInputField" className="form-label">Notes / comments</label>
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
                                        <label htmlFor="shiftInputField" className="form-label">Shift schedule</label>
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
                                    <button type="submit" className="btn btn-primary">Add Accountant</button>
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
