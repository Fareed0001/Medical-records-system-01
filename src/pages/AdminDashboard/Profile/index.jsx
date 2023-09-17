import React, { useRef } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/Navbar/Navbar';
import styles from "./Profile.module.css";

const Index = () => {
    const fileInputRef = useRef(null);

    // Function to trigger the file input click event
    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                {/* body content start */}
                <div className='container'>
                    <div className='row'>
                        <div className={`col-3 ${styles.imgDiv}`}>
                            {/* Clicking the image triggers the file input */}
                            <img
                                src='..\images\profile-pictures\favicon.png'
                                alt='profile picture'
                                className={styles.profilePicture}
                                onClick={handleImageClick}
                            />
                            {/* File input hidden element */}
                            <input
                                type='file'
                                ref={fileInputRef}
                                className={styles.profilePictureInput}
                            />
                        </div>

                        <div className={`col-9 ${styles.userDetailsDiv}`}>
                            <form className={styles.form}>

                                <div className={styles.currentDetailsDiv}>
                                    <div className='row'>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="nameInputField" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="nameInputField" placeholder='Farid Ibrahim Mohammed' />
                                        </div>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="emailInputField" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="emailInputField" placeholder='faridibrahim0003@gmail.com' />
                                        </div>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="phoneInputField" className="form-label">Phone number</label>
                                            <input type="number" className="form-control" id="phoneInputField" placeholder='+234 905 292 7094' />
                                        </div>
                                        <div className={`col-md-6 ${styles.formColDiv}`}>
                                            <label htmlFor="passwordInputField" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="passwordInputField" placeholder='Army Barack Kurudu' />
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
