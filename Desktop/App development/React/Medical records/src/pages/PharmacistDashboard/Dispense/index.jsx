import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/PharmacistSidebar/Sidebar';
import Navbar from '@/components/Navbar/PharmacistNavbar/PharmacistNavbar';
import styles from "@/pages/PharmacistDashboard/Styles.module.css";
import { patientData } from "@/components/Data/PatientData";
import Select from 'react-select';


const Index = () => {
    const [patients, setPatients] = useState([...patientData]);

    const [formData, setFormData] = useState({
        name: '',
        date: '',
        medication: '',
        prescription: '',
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
                                    Dispensory
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
                                            <div className={`col-md-12 ${styles.formColDiv}`}>
                                                <label htmlFor="medication" className="form-label">Medication</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="text"
                                                    name="text"
                                                    value={formData.medication}
                                                    onChange={handleFormInputChange}
                                                />
                                            </div>
                                            <div className={`col-md-12 ${styles.formColDiv}`}>
                                                <label htmlFor="prescription" className="form-label">Prescription</label>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    id="text"
                                                    name="text"
                                                    value={formData.prescription}
                                                    onChange={handleFormInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className={`col-auto ${styles.formButtonDiv}`}>
                                            <button type="submit" className="btn btn-primary">Dispense medication</button>
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
