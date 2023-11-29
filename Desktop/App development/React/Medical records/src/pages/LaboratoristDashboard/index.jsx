import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/LaboratoristSidebar/Sidebar';
import Navbar from '@/components/Navbar/LaboratoristNavbar/LaboratoristNavbar';
import styles from "@/pages/LaboratoristDashboard/Styles.module.css";
import { BiSearch } from "react-icons/bi";
import { BsTrashFill } from "react-icons/bs";
import { MdScheduleSend } from "react-icons/md";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { patientData } from "@/components/Data/PatientData";
import Link from "next/link";

const ROWS_PER_PAGE = 5;

const Index = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('');
    const [patients, setPatients] = useState([...patientData]);

    const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
    const endIndex = Math.min(startIndex + ROWS_PER_PAGE, patients.length);

    const filteredPatients = patients
        .filter(patient => patient.labReport && patient.labReport.labTest) // Only include patients with the "labReport" object
        .filter(patient =>
            patient.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            patient.medicalRecordNumber.toLowerCase().includes(searchInput.toLowerCase())
        );

    const patientPageData = filteredPatients.slice(startIndex, endIndex);

    const handleDeleteClick = (patientId) => {
        const updatedPatients = patients.filter(patient => patient.medicalRecordNumber !== patientId);
        setPatients(updatedPatients);
    };

    const handleNextPageClick = () => {
        if (currentPage < Math.ceil(filteredPatients.length / ROWS_PER_PAGE)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
        setCurrentPage(1);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [patients, searchInput]);

    const renderTestInput = (labTest) => {
        switch (labTest) {
            case "Full blood count":
            return (
                <div>
                    <div className="mb-3">
                    <label htmlFor="hemoglobin" className="col-form-label">Hemoglobin</label>
                    <input type="text" className="form-control" id="hemoglobin" />
                </div>
                <div className="mb-3">
                    <label htmlFor="PCV" className="col-form-label">PCV(hematocrit)</label>
                    <input type="text" className="form-control" id="PCV" />
                </div>
                <div className="mb-3">
                    <label htmlFor="MCV" className="col-form-label">MCV</label>
                    <input type="text" className="form-control" id="MCV" />
                </div>
                <div className="mb-3">
                    <label htmlFor="MCH" className="col-form-label">MCH</label>
                    <input type="text" className="form-control" id="MCH" />
                </div>
                <div className="mb-3">
                    <label htmlFor="MCHC" className="col-form-label">MCHC</label>
                    <input type="text" className="form-control" id="MCHC" />
                </div>
                </div>
            );
            case "EUCr":
            return (
                <div>
                    <div className="mb-3">
                        <label htmlFor="sodium" className="col-form-label">Sodium (Na+)</label>
                        <input type="text" className="form-control" id="sodium" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="potassium" className="col-form-label">Pchlorineotassium (K+)</label>
                        <input type="text" className="form-control" id="potassium" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="chlorine" className="col-form-label">Chlorine (Cl-)</label>
                        <input type="text" className="form-control" id="chlorine" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bicarbonate" className="col-form-label">Bicarbonate (HCO3-)</label>
                        <input type="text" className="form-control" id="bicarbonate" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="calciumTotal" className="col-form-label">Calcium total (Ca++)</label>
                        <input type="text" className="form-control" id="calciumTotal" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="magnesium" className="col-form-label">Magnesium (Mg++)</label>
                        <input type="text" className="form-control" id="magnesium" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="osmolarity" className="col-form-label">Osmolarity</label>
                        <input type="text" className="form-control" id="osmolarity" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="urea" className="col-form-label">Urea</label>
                        <input type="text" className="form-control" id="urea" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="creatinine" className="col-form-label">Creatinine</label>
                        <input type="text" className="form-control" id="creatinine" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="uricAcid" className="col-form-label">Uric acid</label>
                        <input type="text" className="form-control" id="uricAcid" />
                    </div>
                </div>
            );
            case "Liver function test":
            return (
               <div>
                    <div className="mb-3">
                        <label htmlFor="albumin" className="col-form-label">Albumin</label>
                        <input type="text" className="form-control" id="albumin" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="totalBilirubin" className="col-form-label">Total bilirubin</label>
                        <input type="text" className="form-control" id="totalBilirubin" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conjugatedBilirubin" className="col-form-label">Conjugated bilirubin</label>
                        <input type="text" className="form-control" id="conjugatedBilirubin" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alamineAminotransferase" className="col-form-label">Alamine aminotransferase</label>
                        <input type="text" className="form-control" id="alamineAminotransferase" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="aspartateAminotransferase" className="col-form-label">Aspartate aminotransferase</label>
                        <input type="text" className="form-control" id="aspartateAminotransferase" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gammaGlutamyltransferase" className="col-form-label">Gamma-glutamyltransferase</label>
                        <input type="text" className="form-control" id="gammaGlutamyltransferase" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="alkalinePhosphate" className="col-form-label">Alkaline phosphate</label>
                        <input type="text" className="form-control" id="alkalinePhosphate" />
                    </div>
               </div>
            );
            case "Thyroid function":
                return (
                    <div>
                         <div className="mb-3">
                             <label htmlFor="freeT3" className="col-form-label">Free T3</label>
                             <input type="text" className="form-control" id="freeT3" />
                         </div>
                         <div className="mb-3">
                             <label htmlFor="freeT4" className="col-form-label">Free T4</label>
                             <input type="text" className="form-control" id="freeT4" />
                         </div>
                         <div className="mb-3">
                             <label htmlFor="TSH" className="col-form-label">TSH</label>
                             <input type="text" className="form-control" id="TSH" />
                         </div>
                    </div>
                );
                case "Hormonal function":
            return (
                <div>
                    <div className="mb-3">
                        <label htmlFor="folliceStimulatingHormone" className="col-form-label">Follice stimulating hormone (FSH)</label>
                        <input type="text" className="form-control" id="folliceStimulatingHormone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="luteinizingHormone" className="col-form-label">Luteinizing hormone (LH)</label>
                        <input type="text" className="form-control" id="luteinizingHormone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="prolactin" className="col-form-label">Prolactin</label>
                        <input type="text" className="form-control" id="prolactin" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="estrogen" className="col-form-label">Estrogen</label>
                        <input type="text" className="form-control" id="estrogen" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="progesterone" className="col-form-label">Progesterone</label>
                        <input type="text" className="form-control" id="progesterone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="testosterone" className="col-form-label">Testosterone</label>
                        <input type="text" className="form-control" id="testosterone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="humanChorionicGonadotropin" className="col-form-label">Human chorionic gonadotropin (HCG)</label>
                        <input type="text" className="form-control" id="humanChorionicGonadotropin" />
                    </div>
                </div>
            );
            case "Toxicology":
            return (
                <div>
                     <div className="mb-3">
                         <label htmlFor="toxocology" className="col-form-label">Toxocology</label>
                         <textarea type="text" className="form-control" id="toxocology" />
                     </div>
                </div>
            );
            case "Cardiac enzyme assay":
            return (
                <div>
                    <div className="mb-3">
                        <label htmlFor="myoglobin" className="col-form-label">Myoglobin</label>
                        <input type="text" className="form-control" id="myoglobin" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="CK-MB" className="col-form-label">CK-MB</label>
                        <input type="text" className="form-control" id="CK-MB" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="CK" className="col-form-label">CK</label>
                        <input type="text" className="form-control" id="CK" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tropT" className="col-form-label">Trop T</label>
                        <input type="text" className="form-control" id="tropT" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="AST" className="col-form-label">AST</label>
                        <input type="text" className="form-control" id="AST" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LDH" className="col-form-label">LDH</label>
                        <input type="text" className="form-control" id="LDH" />
                    </div>
                </div>
            );
            case "Fasting blood sugar":
            return (
                <div>
                     <div className="mb-3">
                         <label htmlFor="fastingBloodSugar" className="col-form-label">Fasting blood sugar</label>
                         <textarea type="text" className="form-control" id="fastingBloodSugar" />
                     </div>
                </div>
            );
            case "Random blood sugar":
            return (
                <div>
                     <div className="mb-3">
                         <label htmlFor="randomBloodSugar" className="col-form-label">Random blood sugar</label>
                         <textarea type="text" className="form-control" id="randomBloodSugar" />
                     </div>
                </div>
            );
            case "APTT/CT":
            return (
                <div>
                     <div className="mb-3">
                         <label htmlFor="APTT/CT" className="col-form-label">APTT/CT</label>
                         <textarea type="text" className="form-control" id="APTT/CT" />
                     </div>
                </div>
            );
            default:
                return null;
        }
    };

    return (
        <div className={styles.body}>
            <Sidebar />
            <div className="bodyContent">
                <Navbar />
                <div className={styles.content}>
                    <ul className="nav nav-tabs" id="myTabs">
                        <li className="nav-item">
                            <a className={`nav-link active ${styles.navLink}`} id="menu0-tab" data-bs-toggle="tab" href="#menu0" role="tab" aria-controls="menu0" aria-selected="true">Doctors requests</a>
                        </li>
                    </ul>
                    <div className={`row ${styles.searchNextDiv}`}>
                        <div className={`col-6 ${styles.searchDiv}`}>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search by name or hospital number"
                                    aria-label="Search"
                                    value={searchInput}
                                    onChange={handleSearchInputChange}
                                />
                                <button className="btn btn-primary" type="submit"><BiSearch /></button>
                            </form>
                        </div>
                        <div className={`col-6 ${styles.nextPageDiv}`}>
                            <p>Total <span className={styles.nextPageSpan}>{filteredPatients.length}</span></p>
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
                                        <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>Hospital Number</div>
                                        <div className='col-8 col-sm-5 col-lg-3'>Name</div>
                                        <div className='col-4 d-none d-lg-block'>Test</div>
                                        <div className='col-3 col-sm-2 col-lg-2'>Results</div>
                                    </div>
                                </div>
                                {patientPageData.map((patient, index) => (
                                    <div className={`container ${styles.contentTableBody}`} key={patient.medicalRecordNumber}>
                                        <div className="row">
                                            <div className='col-1'>{index + 1}</div>
                                            <div className='d-none d-sm-block d-md-block d-lg-block col-sm-4 col-lg-2'>{patient.medicalRecordNumber}</div>
                                            <div className='col-8 col-sm-5 col-lg-3'>{patient.name}</div>
                                            <div className='col-4 d-none d-lg-block'>{patient.labReport.labTest}</div>
                                            <div className='col-3 col-sm-2 col-lg-2'>
                                                <MdScheduleSend
                                                    className={styles.penIcon}
                                                    type="button"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#staticBackdrop-${patient.medicalRecordNumber}`} // Use a unique identifier
                                                />
                                                <div className="modal fade" id={`staticBackdrop-${patient.medicalRecordNumber}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel-${patient.medicalRecordNumber}`} aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id={`staticBackdropLabel-${patient.medicalRecordNumber}`}>{patient.name}</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                <div className="mb-3">
                                                                    <p><strong>TEST TO BE CARRIED OUT:</strong> {patient.labReport.labTest}</p>
                                                                </div>
                                                                <hr />
                                                                <div className="mb-3">
                                                                   <strong>ENTER TEST RESULTS:</strong>
                                                                   {renderTestInput(patient.labReport.labTest)}
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <BsTrashFill
                                                    className={styles.binIcon}
                                                    onClick={() => handleDeleteClick(patient.medicalRecordNumber)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;