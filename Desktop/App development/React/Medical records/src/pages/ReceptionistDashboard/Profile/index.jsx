import React, { useRef, useState } from 'react';
import Sidebar from '@/components/Sidebar/ReceptionistSidebar/Sidebar';
import Navbar from '@/components/Navbar/ReceptionistNavbar/ReceptionistNavbar';
import styles from "./Profile.module.css";

const Index = () => {
    const fileInputRef = useRef(null);

    // State to track form input values
    const [formData, setFormData] = useState({
        name: 'Amaka Nonso',
        email: 'amaka@gmail.com',
        phoneNumber: '+234 905 606 2376',
        address: 'Gwagwalada',
    });

    // State to track the selected image
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle the file input change and set the selected image
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    // Function to handle form submission and update user info
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Update user info with new values
        const updatedFormData = {
            name: e.target.nameInputField.value,
            email: e.target.emailInputField.value,
            phoneNumber: e.target.phoneInputField.value,
            address: e.target.addressInputField.value,
        };

        setFormData(updatedFormData);
    };

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}
                <div className='container'>
                    <div className='row'>
                        <div className={`col-md-3 ${styles.imgDiv}`}>
                            {/* Clicking the image triggers the file input */}
                            <img
                                src={selectedImage || '/images/profile-pictures/favicon.png'}
                                alt='profile picture'
                                className={styles.profilePicture}
                                onClick={() => fileInputRef.current.click()}
                            />
                            {/* File input hidden element */}
                            <input
                                type='file'
                                ref={fileInputRef}
                                className={styles.profilePictureInput}
                                onChange={handleFileInputChange}
                            />
                        </div>

                        <div className={`col-md-9 ${styles.userDetailsDiv}`}>
                            <form className={styles.form} onSubmit={handleFormSubmit}>
                                <div className={styles.currentDetailsDiv}>
                                    <div className='row'>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="nameInputField" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nameInputField"
                                                placeholder='Amaka Nonso'
                                                defaultValue={formData.name}
                                            />
                                        </div>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="emailInputField" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="emailInputField"
                                                placeholder='amaka@gmail.com'
                                                defaultValue={formData.email}
                                            />
                                        </div>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="phoneInputField" className="form-label">Phone number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="phoneInputField"
                                                placeholder='+234 905 606 2376'
                                                defaultValue={formData.phoneNumber}
                                            />
                                        </div>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="addressInputField" className="form-label">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="addressInputField"
                                                placeholder='Gwagwalada'
                                                defaultValue={formData.address}
                                            />
                                        </div>
                                    </div>
                                    <div className={`col-auto ${styles.formButtonDiv}`}>
                                        <button type="submit" className="btn btn-primary">Update user info</button>
                                    </div>
                                </div>

                                <div className={styles.updateDetailsDiv}>
                                    <div className='row'>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="passwordInputField" className="form-label">Current password</label>
                                            <input type="text" className="form-control" id="passwordInputField" />
                                        </div>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="passwordInputField" className="form-label">New password</label>
                                            <input type="text" className="form-control" id="passwordInputField" />
                                        </div>
                                        <div className={`col-md-12 ${styles.formColDiv}`}>
                                            <label htmlFor="passwordInputField" className="form-label">Re-type new password</label>
                                            <input type="text" className="form-control" id="passwordInputField" />
                                        </div>
                                    </div>
                                    <div className={`col-auto ${styles.formButtonDiv}`}>
                                        <button type="submit" className="btn btn-primary">Change password</button>
                                    </div>
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
