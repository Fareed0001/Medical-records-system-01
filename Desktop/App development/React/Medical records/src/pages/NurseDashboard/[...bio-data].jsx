import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/NurseSidebar/Sidebar';
import styles from "@/pages/NurseDashboard/Styles.module.css";
import { usePathname } from 'next/navigation';
import { patientData } from "@/components/Data/PatientData";

function Index() {

    const pathname = usePathname();
    let parts = [];
    let currentPath = '';

    if (pathname) {
        parts = pathname.split('/'); // Split the pathname by '/'
        currentPath = parts[parts.length - 1]; // Get the last part
    }

    // Filter patients based on the currentPath
    const currentPatient = patientData.find(patient =>
        patient.medicalRecordNumber === currentPath
    );

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                {/* patient bio-data start */}
                <div className={styles.bioDataBody}>
                    <h4>Patient bio-data</h4>
                    {currentPatient ? ( // Check if currentPatient is defined
                        <>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <p>Hospital Number: <strong>{currentPatient.medicalRecordNumber}</strong></p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Patient Name: <strong>{currentPatient.name}</strong></p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Patient Gender: <strong>{currentPatient.gender}</strong></p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Patient Date of birth: <strong>{currentPatient.dateOfBirth}</strong></p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Primary Physician: <strong>{currentPatient.primaryCarePhysician}</strong></p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Blood group: <strong>{currentPatient.bloodGroup}</strong></p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Phone number: <strong>{currentPatient.phone}</strong></p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Allergies: <strong>{currentPatient.allergies ? currentPatient.allergies : "None"}</strong></p>
                                </div>
                                <div className='col-md-6'>
                                    <p>Patient Address: <strong>{currentPatient.address}</strong></p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>No patient data found for the given ID</p>
                    )}
                </div>
                <div className={styles.bioDataDetails}>
                    {/* MODALS */}
                    {currentPatient ? ( // Check if currentPatient is defined
                        <>
                            {/* LAB REPORT MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#labReport"
                            >Lab Report
                            </button>

                            <div className="modal fade" id="labReport" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Lab report for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {currentPatient.labReport ? ( // Check if currentPatient labReport is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Result: {currentPatient.labReport.results}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Recommendation: {currentPatient.labReport.recommendations}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>There is no report from the lab</p>
                                            )}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* LAB REPORT MODAL END  */}




                            {/* E-FOLDER MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#E-folder"
                            >E-folder
                            </button>

                            <div className="modal fade" id="E-folder" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">E-folder for {currentPatient.name}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <h5>Patient personal information</h5>
                                            <div className="mb-3">
                                                <p>Hospital Number: <strong>{currentPatient.medicalRecordNumber}</strong></p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Patient Name: <strong>{currentPatient.name}</strong></p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Patient Gender: <strong>{currentPatient.gender}</strong></p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Patient Date of birth: <strong>{currentPatient.dateOfBirth}</strong></p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Primary Physician: <strong>{currentPatient.primaryCarePhysician}</strong></p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Blood group: <strong>{currentPatient.bloodGroup}</strong></p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Phone number: <strong>{currentPatient.phone}</strong></p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Allergies: <strong>{currentPatient.allergies ? currentPatient.allergies : "None"}</strong></p>
                                            </div>
                                            <div className="mb-3">
                                                <p>Patient Address: <strong>{currentPatient.address}</strong></p>
                                            </div>
                                            <hr />

                                            <h5>Medical history</h5>
                                            {currentPatient && currentPatient.doctorsNote ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Last Presented Complain: <strong>{currentPatient.doctorsNote.presentingComplaint}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>History of Presented Complain: <strong>{currentPatient.doctorsNote.historyOfPresentingComplaint}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Past Medical History: <strong>{currentPatient.doctorsNote.pastMedicalHistory}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Drug History: <strong>{currentPatient.doctorsNote.drugHistory}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Family History: <strong>{currentPatient.doctorsNote.familyHistory}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>social History: <strong>{currentPatient.doctorsNote.socialHistory}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Summary: <strong>{currentPatient.doctorsNote.summary}</strong></p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient has no medical history in the database</p>
                                            )}
                                            <hr />

                                            <h5>Laboratory Report</h5>
                                            {currentPatient && currentPatient.labReport ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Result: <strong>{currentPatient.labReport.results}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Recommendation: <strong>{currentPatient.labReport.recommendations}</strong></p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient is yet to get report from the lab</p>
                                            )}
                                            <hr />

                                            <h5>Prescription</h5>
                                            {currentPatient && currentPatient.prescription ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Drug: <strong>{currentPatient.prescription.drug}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Prescription: <strong>{currentPatient.prescription.dispensingInstructions}</strong></p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Medications are yet to be prescribed</p>
                                            )}
                                            <hr />

                                            <h5>Nurses Notes</h5>
                                            {currentPatient && currentPatient.nursesNote ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Temperature: <strong>{currentPatient.nursesNote.temperature}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Urine Output: <strong>{currentPatient.nursesNote.urineOutput}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Date: <strong>{currentPatient.nursesNote.date}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Summary: <strong>{currentPatient.nursesNote.summary}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Notes: <strong>{currentPatient.nursesNote.notes}</strong></p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>There is no nurse record on patient</p>
                                            )}
                                            <hr />

                                            <h5>Admission</h5>
                                            {currentPatient && currentPatient.ward ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Name: <strong>{currentPatient.ward.name}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Ward: <strong>{currentPatient.ward.wardType}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Operation Time: <strong>{currentPatient.ward.operatingTime}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Description: <strong>{currentPatient.ward.description}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Capacity: <strong>{currentPatient.ward.capacity}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Manager: <strong>{currentPatient.ward.manager}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Nurses: <strong>{currentPatient.ward.nurses}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Avalable Equipments: <strong>{currentPatient.ward.facilitiesEquipment}</strong></p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient was never admitted</p>
                                            )}
                                            <hr />

                                            <h5>Discharge Summary</h5>
                                            {currentPatient && currentPatient.dischargeSummary ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Hospital Course: <strong>{currentPatient.dischargeSummary.hospitalCourse}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Reason for Admission: <strong>{currentPatient.dischargeSummary.reasonForAdmission}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Findings: <strong>{currentPatient.dischargeSummary.findings}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Treatment: <strong>{currentPatient.dischargeSummary.treatment}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Progress and Complications: <strong>{currentPatient.dischargeSummary.progressAndComplications}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Discharge Diagnosis: <strong>{currentPatient.dischargeSummary.dischargeDiagnosis}</strong></p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient was never admitted</p>
                                            )}
                                            <hr />

                                            <h5>Radiology Report</h5>
                                            {currentPatient && currentPatient.radiologyReport ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Study Details: <strong>{currentPatient.radiologyReport.studyDetails}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Findings: <strong>{currentPatient.radiologyReport.findings}</strong></p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Diagnosis: <strong>{currentPatient.radiologyReport.diagnosis}</strong></p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient is yet to visit the radiologist</p>
                                            )}
                                            <hr />

                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* E-FOLDER MODAL END  */}


                        </>
                    ) : (
                        <p>An error occured. Do not reload the page, instead go back and try accessing it again</p>
                    )}



                </div>
                {/* patient bio-data end */}

            </div>
        </div>
    );
}

export default Index;