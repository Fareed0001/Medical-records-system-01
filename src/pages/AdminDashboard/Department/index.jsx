import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/AdminSidebar/Sidebar';
import Navbar from '@/components/Navbar/AdminNavbar/Navbar';
import styles from "@/pages/AdminDashboard/Styles.module.css";
import { BiSearch, BiSolidEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { departmentData } from "@/components/Data/DepartmentData";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the total number of departments
    const [totalDepartments, setTotalDepartments] = useState(departmentData.length);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the form input values
    const [formData, setFormData] = useState({
        departmentName: '',
        head: '',
        specialization: '',
        operatingHours: '',
    });

    // State for the list of departments
    const [departments, setDepartments] = useState([...departmentData]);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, totalDepartments);

    // Filter the departments based on the search input
    const filteredDepartments = departments.filter(department =>
        department.departmentName.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered departments to get the rows for the current page
    const departmentPageData = filteredDepartments.slice(startIndex, endIndex);

    // Function to handle the delete action when the trash icon is clicked
    const handleDeleteClick = (departmentId) => {
        // Remove the department with the specified id
        const updatedDepartments = departments.filter(department => department.id !== departmentId);

        // Update the total number of departments
        setTotalDepartments(updatedDepartments.length);

        // Update the departments list
        setDepartments(updatedDepartments);
    };

    // Function to handle form input change
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add the new department to the list
        if (formData.departmentName && formData.head) {
            const newDepartment = {
                ...formData,
                id: totalDepartments + 1, // Assign a unique ID
            };

            // Update the total number of departments
            setTotalDepartments(totalDepartments + 1);

            // Update the departments list
            setDepartments([...departments, newDepartment]);

            // Clear the form
            setFormData({
                departmentName: '',
                head: '',
                specialization: '',
                operatingHours: '',
            });
        }
    };

    // Function to handle the "Next" button click
    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredDepartments.length / ROWS_PER_PAGE)) {
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

    // Reset the current page and filtered data when the departments or search input changes
    useEffect(() => {
        setCurrentPage(1);
    }, [departments, searchInput]);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}

                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Departments</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Department</a>
                        </li>
                    </ul>

                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by department"
                                    aria-label="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-primary" type="submit"><BiSearch /></button>
                            </form>
                        </div>
                        <div className={`col-6 ${styles.nextPageDiv}`}>
                            <p>Total <span className={styles.nextPageSpan}>{filteredDepartments.length}</span></p>
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
                                        <div className='col-8 col-sm-4 col-lg-2'>Department</div>
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-5 col-lg-3'>Head</div>
                                        <div className='col-lg-3 d-none d-lg-block'>Specialization</div>
                                        <div className='col-lg-1 d-none d-lg-block'>Hours</div>
                                        <div className='col-3 col-sm-2'>Option</div>
                                    </div>
                                </div>
                                {/* Map departmentPageData and generate table rows */}
                                {departmentPageData.map((department, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={department.id}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='col-8 col-sm-4 col-lg-2'>{department.departmentName}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-5 col-lg-3'>{department.head}</div>
                                            <div className='col-lg-3 d-none d-lg-block'>{department.specialization}</div>
                                            <div className='col-lg-1 d-none d-lg-block'>{department.operatingHours}</div>
                                            <div className='col-3 col-sm-2'>
                                                <BiSolidEditAlt className={styles.penIcon} />
                                                <BsTrashFill
                                                    className={styles.binIcon}
                                                    onClick={() => handleDeleteClick(department.id)}
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
                                        <label htmlFor="departmentName" className="form-label">Department Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="departmentName"
                                            name="departmentName"
                                            value={formData.departmentName}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="head" className="form-label">Head</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="head"
                                            name="head"
                                            value={formData.head}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="specialization" className="form-label">Specialization</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="specialization"
                                            name="specialization"
                                            value={formData.specialization}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="operatingHours" className="form-label">Operating Hours</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="operatingHours"
                                            name="operatingHours"
                                            value={formData.operatingHours}
                                            onChange={handleFormInputChange}
                                        />
                                    </div>
                                </div>
                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add Department</button>
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
