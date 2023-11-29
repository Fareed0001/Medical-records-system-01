import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/AdminSidebar/Sidebar';
import Navbar from '@/components/Navbar/AdminNavbar/Navbar';
import styles from "@/pages/AdminDashboard/Styles.module.css";
import { BiSearch, BiSolidEditAlt } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import wardData from "@/components/Data/WardData";

const ROWS_PER_PAGE = 5; // Number of rows to display per page

const Index = () => {
    // State to track the total number of wards
    const [totalWards, setTotalWards] = useState(wardData.length);

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search input
    const [searchInput, setSearchInput] = useState('');

    // State for the form input values
    const [formData, setFormData] = useState({
        Name: '',
        "Ward type": '',
        "Operating time": '',
        Description: '',
        Capacity: '',
        Manager: '',
        Nurses: '',
        "Facilities / Equipment": '',
        "Notes / comments": '',
    });

    // State for the list of wards
    const [wards, setWards] = useState([...wardData]);

    // Calculate the starting index and ending index for the current page
    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, totalWards);

    // Filter the wards based on the search input
    const filteredWards = wards.filter(ward =>
        ward.Name.toLowerCase().includes(searchInput.toLowerCase()) ||
        ward["Ward type"].toLowerCase().includes(searchInput.toLowerCase())
    );

    // Slice the filtered wards to get the rows for the current page
    const wardPageData = filteredWards.slice(startIndex, endIndex);

    // Function to handle the delete action when the trash icon is clicked
    const handleDeleteClick = (wardName) => {
        // Remove the ward with the specified name
        const updatedWards = wards.filter(ward => ward.Name !== wardName);

        // Update the total number of wards
        setTotalWards(updatedWards.length);

        // Update the wards list
        setWards(updatedWards);
    };

    // Function to handle form input change
    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add the new ward to the list
        if (
            formData.Name &&
            formData["Ward type"] &&
            formData["Operating time"] &&
            formData.Description &&
            formData.Capacity &&
            formData.Manager &&
            formData.Nurses &&
            formData["Facilities / Equipment"] &&
            formData["Notes / comments"]
        ) {
            const newWard = {
                ...formData,
            };

            // Update the total number of wards
            setTotalWards(totalWards + 1);

            // Update the wards list
            setWards([...wards, newWard]);

            // Clear the form
            setFormData({
                Name: '',
                "Ward type": '',
                "Operating time": '',
                Description: '',
                Capacity: '',
                Manager: '',
                Nurses: '',
                "Facilities / Equipment": '',
                "Notes / comments": '',
            });
        }
    };

    // Function to handle the "Next" button click
    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredWards.length / ROWS_PER_PAGE)) {
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

    // Reset the current page and filtered data when the wards or search input changes
    useEffect(() => {
        setCurrentPage(1);
    }, [wards, searchInput]);

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}
                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Wards</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.navLink}`} id="menu1-tab" data-bs-toggle="tab" href="#menu1" role="tab" aria-controls="menu1" aria-selected="false">Add Ward</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name or type"
                                    aria-label="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-primary" type="submit"><BiSearch /></button>
                            </form>
                        </div>
                        <div className={`col-6 ${styles.nextPageDiv}`}>
                            <p>Total <span className={styles.nextPageSpan}>{filteredWards.length}</span></p>
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
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Type</div>
                                        <div className='col-2 d-none d-lg-block'>Capacity</div>
                                        <div className='col-3 d-none d-lg-block'>Manager</div>
                                        <div className='col-3 col-sm-2'>Option</div>
                                    </div>
                                </div>
                                {/* Map wardPageData and generate table rows */}
                                {wardPageData.map((ward, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={index}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='col-8 col-sm-4 col-lg-2'>{ward.Name}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>{ward["Ward type"]}</div>
                                            <div className='col-2 d-none d-lg-block'>{ward.Capacity}</div>
                                            <div className='col-3 d-none d-lg-block'>{ward.Manager}</div>
                                            <div className='col-3 col-sm-2'>
                                                <BiSolidEditAlt className={styles.penIcon} />
                                                <BsTrashFill
                                                    className={styles.binIcon}
                                                    onClick={() => handleDeleteClick(ward.Name)}
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
                                        <label htmlFor="Name" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Name"
                                            name="Name"
                                            value={formData.Name}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="Ward type" className="form-label">Ward type</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Ward type"
                                            name="Ward type"
                                            value={formData["Ward type"]}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-3 ${styles.formColDiv}`}>
                                        <label htmlFor="Operating time" className="form-label">Operating time</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Operating time"
                                            name="Operating time"
                                            value={formData["Operating time"]}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-8 ${styles.formColDiv}`}>
                                        <label htmlFor="Description" className="form-label">Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Description"
                                            name="Description"
                                            value={formData.Description}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-4 ${styles.formColDiv}`}>
                                        <label htmlFor="Capacity" className="form-label">Capacity</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="Capacity"
                                            name="Capacity"
                                            value={formData.Capacity}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-5 ${styles.formColDiv}`}>
                                        <label htmlFor="Manager" className="form-label">Manager</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Manager"
                                            name="Manager"
                                            value={formData.Manager}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-7 ${styles.formColDiv}`}>
                                        <label htmlFor="Nurses" className="form-label">Nurses</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Nurses"
                                            name="Nurses"
                                            value={formData.Nurses}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="Facilities / Equipment" className="form-label">Facilities / Equipment</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Facilities / Equipment"
                                            name="Facilities / Equipment"
                                            value={formData["Facilities / Equipment"]}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                    <div className={`col-md-6 ${styles.formColDiv}`}>
                                        <label htmlFor="Notes / comments" className="form-label">Notes / comments</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Notes / comments"
                                            name="Notes / comments"
                                            value={formData["Notes / comments"]}
                                            onChange={handleFormInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={`col-auto ${styles.formButtonDiv}`}>
                                    <button type="submit" className="btn btn-primary">Add Ward</button>
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
