import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/LaboratoristSidebar/Sidebar';
import Navbar from '@/components/Navbar/LaboratoristNavbar/LaboratoristNavbar';
import styles from "@/pages/LaboratoristDashboard/Styles.module.css";
import { patientData } from "@/components/Data/PatientData";
import Select from 'react-select';


const Index = () => {
    const [patients, setPatients] = useState([...patientData]);

    const [formData, setFormData] = useState({
        name: '',
        testType: '',
        testResult: '',
    });

    const handleFormInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const testTypes = [
        { case: "Full blood count", return: ["Hemoglobin", "PCV(hematocrit)", "MCV", "MCH", "MCHC"] },
        { case: "EUCr", return: ["Sodium (Na+)", "Pchlorineotassium (K+)", "Chlorine (Cl-)", "Bicarbonate (HCO3-)", "Calcium total (Ca++)", "Magnesium (Mg++)", "Osmolarity", "Urea", "Creatinine", "Uric acid"] },
        { case: "Liver function test", return: ["Albumin", "Total bilirubin", "Conjugated bilirubin", "Alamine aminotransferase", "Aspartate aminotransferase", "Gamma-glutamyltransferase", "Alkaline phosphate"] },
        { case: "Thyroid function", return: ["Free T3", "Free T4", "TSH"] },
        { case: "Hormonal function", return: ["Follice stimulating hormone (FSH)", "Luteinizing hormone (LH)", "Prolactin", "Estrogen", "Progesterone", "Testosterone", "Human chorionic gonadotropin (HCG)"] },
        { case: "Toxicology", return: ["Toxicology"] },
        { case: "Cardiac enzyme assay", return: ["Myoglobin", "CK-MB", "CK", "Trop T", "AST", "LDH"] },
        { case: "Fasting blood sugar", return: ["Fasting blood sugar"] },
        { case: "Random blood sugar", return: ["Random blood sugar"] },
        { case: "APTT/CT", return: ["APTT/CT"] },
    ];

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
                                    Test area
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
                                            <div className={`col-md-4 ${styles.formColDiv}`}>
                                                <label htmlFor="testType" className="form-label">Select test type</label>
                                                <select
                                                    className="form-select"
                                                    id="testType"
                                                    name="testType"
                                                    value={formData.testType}
                                                    onChange={handleFormInputChange}
                                                    aria-label="Select a test type"
                                                    required
                                                >
                                                    <option value="" disabled>Select a test type</option>
                                                    {testTypes.map((testType, index) => (
                                                        <option key={testType.case} value={testType.case}>
                                                            {testType.case}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div><div className={`col-md-2 ${styles.formColDiv}`}>
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
                                            <div className="row">
                                                <div className={`col-12 ${styles.formColDiv}`}>
                                                <label htmlFor="testResult" className="form-label">ENTER TEST RESULT DATA</label>
                                                {formData.testType && (
                                                    <div>
                                                        {testTypes.find(testType => testType.case === formData.testType).return.map((fieldName, index) => (
                                                            <div className="mb-3" key={fieldName}>
                                                                <label htmlFor={fieldName} className="col-form-label">{fieldName}</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id={fieldName}
                                                                    name={fieldName}
                                                                    value={formData[fieldName]}
                                                                    onChange={handleFormInputChange}
                                                                />
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            </div>
                                        </div>
                                        <div className={`col-auto ${styles.formButtonDiv}`}>
                                            <button type="submit" className="btn btn-primary">Add result</button>
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
