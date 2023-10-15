import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar/DoctorSidebar/Sidebar';
import styles from "@/pages/DoctorDashboard/Styles.module.css";
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
                            {/* LAB REQUEST MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#labRequest"
                            >Lab Request
                            </button>

                            <div className="modal fade" id="labRequest" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Lab request for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="fullBloodCount" />
                                                    <label class="form-check-label" for="fullBloodCount">
                                                        Full Blood Count
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="EuCr" />
                                                    <label class="form-check-label" for="EuCr">
                                                        EuCr
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="liverFunctionTest" />
                                                    <label class="form-check-label" for="liverFunctionTest">
                                                        Liver function test
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="thyroidFunctionTest" />
                                                    <label class="form-check-label" for="thyroidFunctionTest">
                                                        Thyroid function test
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="hormonalAssay" />
                                                    <label class="form-check-label" for="hormonalAssay">
                                                        Hormonal assay
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="toxicology" />
                                                    <label class="form-check-label" for="toxicology">
                                                        Toxicology
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="cardiacEnzymeAssay" />
                                                    <label class="form-check-label" for="cardiacEnzymeAssay">
                                                        Cardiac enzyme assay
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="fastingBloodSugar" />
                                                    <label class="form-check-label" for="fastingBloodSugar">
                                                        Fasting blood sugar
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="randomBloodSugar" />
                                                    <label class="form-check-label" for="randomBloodSugar">
                                                        Random blood sugar
                                                    </label>
                                                </div>
                                                <hr />
                                                <div className="mb-3">
                                                    <input class="form-check-input" type="checkbox" value="" id="APTT/CT" />
                                                    <label class="form-check-label" for="APTT/CT">
                                                        APTT/CT
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Send request</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* LAB REQUEST MODAL END  */}




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





                            {/* UPDATE NOTE MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#history"
                            >History
                            </button>

                            <div className="modal fade" id="history" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Latest history for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {currentPatient.doctorsNote ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Presenting Complain: {currentPatient.doctorsNote.presentingComplaint}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>History of Presenting Complain: {currentPatient.doctorsNote.historyOfPresentingComplaint}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Past Medical History: {currentPatient.doctorsNote.pastMedicalHistory}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Drug History: {currentPatient.doctorsNote.drugHistory}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Family History: {currentPatient.doctorsNote.familyHistory}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Social History: {currentPatient.doctorsNote.socialHistory}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Summary: {currentPatient.doctorsNote.summary}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient has no history records in the database</p>
                                            )}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* UPDATE NOTE MODAL END  */}





                            {/* NEW NOTE MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#addNewHistory"
                            >Add New History
                            </button>

                            <div className="modal fade" id="addNewHistory" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Record Current History for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="presentingComplain" className="col-form-label">Presenting Complain:</label>
                                                    <input type="text" className="form-control" id="presentingComplain" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="historyOfPresentingComplain" className="col-form-label">History of Presenting Complain:</label>
                                                    <input type="text" className="form-control" id="historyOfPresentingComplain" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="pastMedicalHistory" className="col-form-label">Past Medical History:</label>
                                                    <input type="text" className="form-control" id="pastMedicalHistory" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="drugHistory" className="col-form-label">Drug History:</label>
                                                    <input type="text" className="form-control" id="drugHistory" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="familyHistory" className="col-form-label">Family History:</label>
                                                    <input type="text" className="form-control" id="familyHistory" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="socialHistory" className="col-form-label">Social History:</label>
                                                    <input type="text" className="form-control" id="socialHistory" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="summary" className="col-form-label">Summary:</label>
                                                    <textarea type="text" className="form-control" id="summary" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">add history</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* NEW NOTE MODAL END  */}





                            {/* PRESCRIPTION MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#prescription"
                            >Prescription
                            </button>

                            <div className="modal fade" id="prescription" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Prescription for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {currentPatient.prescription ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Dispensing Instruction: {currentPatient.prescription.dispensingInstructions}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Prescribed Medication: {currentPatient.prescription.drug}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient is yet to recieve a prescription</p>
                                            )}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* PRESCRIPTION MODAL END  */}





                            {/* ADD PRESCRIPTION MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#addPrescription"
                            >Add Prescription
                            </button>

                            <div className="modal fade" id="addPrescription" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Prescribe Medication for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="prescribedMedication" className="col-form-label">Prescribed Medication:</label>
                                                    <input type="text" className="form-control" id="prescribedMedication" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="DispensingInstruction" className="col-form-label">Dispensing Instruction:</label>
                                                    <input type="text" className="form-control" id="DispensingInstruction" />
                                                </div>

                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">change medication</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ADD PRESCRIPTION MODAL END  */}





                            {/* DISCHARGE SUMMARY MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#dischargeSummary"
                            >Discharge Summary
                            </button>

                            <div className="modal fade" id="dischargeSummary" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Discharge summary for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {currentPatient.dischargeSummary ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Hospital course: {currentPatient.dischargeSummary.hospitalCourse}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Reason for admission: {currentPatient.dischargeSummary.reasonForAdmission}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Findings: {currentPatient.dischargeSummary.findings}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Treatment: {currentPatient.dischargeSummary.treatment}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Progress and complications: {currentPatient.dischargeSummary.progressAndComplications}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Discharge diagnosis: {currentPatient.dischargeSummary.dischargeDiagnosis}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient was never admitted</p>
                                            )}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* DISCHARGE SUMMARY MODAL END  */}




                            {/* RADIOLOGY REPORT MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#radiologyReport"
                            >Radiology Report
                            </button>

                            <div className="modal fade" id="radiologyReport" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Radiology report for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            {currentPatient.radiologyReport ? ( // Check if currentPatient is defined
                                                <>
                                                    <div className="mb-3">
                                                        <p>Study details: {currentPatient.radiologyReport.studyDetails}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>Findings: {currentPatient.radiologyReport.findings}</p>
                                                    </div>
                                                    <div className="mb-3">
                                                        <p>diagnosis: {currentPatient.radiologyReport.diagnosis}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p>Patient is yet to visit the radiologist</p>
                                            )}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* RADIOLOGY REPORT MODAL END  */}




                            {/* NOTE MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#newNote"
                            >New Note
                            </button>

                            <div className="modal fade" id="newNote" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Note for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="noteTitle" className="col-form-label">Note title:</label>
                                                    <input type="text" className="form-control" id="noteTitle" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="destinationOffice" className="col-form-label">Destination Office:</label>
                                                    <select className="form-select" aria-label="Default select example" id="destinationOffice">
                                                        <option value="" defaultValue>Select destination office</option>
                                                        <option value="admin">Admin</option>
                                                        <option value="doctor">Doctor</option>
                                                        <option value="nurse">Nurse</option>
                                                        <option value="pharmacist">Pharmacist</option>
                                                        <option value="laboratorist">Laboratorist</option>
                                                        <option value="accountant">Accountant</option>
                                                        <option value="receptionist">Receptionist</option>
                                                    </select>
                                                </div>

                                                <div className="mb-3">
                                                    <label htmlFor="noteContent" className="col-form-label">Note Content:</label>
                                                    <textarea type="text" className="form-control" id="noteContent" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Send note</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* NOTE MODAL END  */}




                            {/* EXAMINATION MODAL START */}
                            <button
                                type="button" className={`btn btn-outline-dark ${styles.bioDataDetailsButton}`}
                                data-bs-toggle="modal"
                                data-bs-target="#examination"
                            >Examination
                            </button>

                            <div className="modal fade" id="examination" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fs-5" id="staticBackdropLabel">Examination for {currentPatient.name}</h3>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="generalPhysicalExam" className="col-form-label">General Physical Exam:</label>
                                                    <input type="text" className="form-control" id="generalPhysicalExam" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="respiratoryExam" className="col-form-label">Respiratory Exam:</label>
                                                    <input type="text" className="form-control" id="respiratoryExam" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="cardiovascularExam" className="col-form-label">Cardiovascular Exam:</label>
                                                    <input type="text" className="form-control" id="cardiovascularExam" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="neurologicalExam" className="col-form-label">Neurological Exam:</label>
                                                    <input type="text" className="form-control" id="neurologicalExam" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="abdominalExam" className="col-form-label">Abdominal Exam:</label>
                                                    <input type="text" className="form-control" id="abdominalExam" />
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Add record</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* EXAMINATION MODAL END  */}


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