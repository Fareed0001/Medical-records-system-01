import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/PharmacistSidebar/Sidebar';
import Navbar from '@/components/Navbar/PharmacistNavbar/PharmacistNavbar';
import styles from "@/pages/PharmacistDashboard/Styles.module.css";
import { patientData } from "@/components/Data/PatientData";
import Select from 'react-select';
import { BiPlus } from "react-icons/bi";


const Index = () => {
    const [patients, setPatients] = useState([...patientData]);

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        supplies: '',
        quantity: '',
    });

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                <div className={styles.content}>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="menu0" role="tabpanel" aria-labelledby="menu0-tab">
                            <div className={styles.contentTable}>
                                <div className={`container ${styles.contentTableHead}`}>
                                    Supplies
                                </div>
                                <div className={`container ${styles.contentTableBody}`}>
                                    <form className={styles.form}>
                                        <div className='row'>
                                            <div className={`col-md-6 ${styles.formColDiv}`}>
                                                <label htmlFor="name" className="form-label">Select patient</label>
                                                <Select
                                                    className="form-select"
                                                    name="name"
                                                    value={formData.name ? { value: formData.name, label: formData.name } : null}
                                                    options={patients.map(patient => ({
                                                        value: patient.name,
                                                        label: patient.name
                                                    }))}
                                                    onChange={selectedOption => {
                                                        setFormData({ ...formData, name: selectedOption.value });
                                                    }}
                                                    placeholder="Search or select a patient"
                                                />
                                            </div>
                                            <div className={`col-md-6 ${styles.formColDiv}`}>
                                                <label htmlFor="testType" className="form-label">Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleFormInputChange}
                                                />
                                            </div>
                                            <div className={`col-8 ${styles.formColDiv}`}>
                                                <label htmlFor="supplies" className="form-label">Supplies</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="supplies"
                                                    name="supplies"
                                                    value={formData.supplies}
                                                    onChange={handleFormInputChange}
                                                />
                                            </div>
                                            <div className={`col-2 ${styles.formColDiv}`}>
                                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="quantity"
                                                    name="quantity"
                                                    value={formData.quantity}
                                                    onChange={handleFormInputChange}
                                                />
                                            </div>
                                            <div className={`col-2 ${styles.formColDiv}`}>
                                                <button type="button" className="btn btn-primary"><BiPlus className={styles.supplyIcon}/>new supply</button>
                                            </div>
                                        </div>
                                        <div className={`col-auto ${styles.formButtonDiv}`}>
                                            <button type="submit" className="btn btn-primary">Record supplies</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
