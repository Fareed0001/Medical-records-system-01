// import React from 'react';
// import Sidebar from '@/components/Sidebar/DoctorSidebar/Sidebar';
// import Navbar from '@/components/Navbar/DoctorNavbar/DoctorNavbar';
// import styles from "@/pages/DoctorDashboard/Styles.module.css";
// // import { patientData } from "@/components/Data/PatientData";

// function bioData() {
//     return (
//         <div className={styles.body}>
//             <Sidebar />
//             <div className="bodyContent">
//                 <Navbar />
//                 {/* patient bio-data start */}
//                 <div className="bioData-body">
//                     <div className="row">
//                         <div className="col-md-6">
//                             <strong>Bed number: </strong>
//                             {patient.ward.capacity}
//                         </div>
//                         <div className="col-md-6">
//                             <strong>Ward: </strong>
//                             {patient.ward.wardType}
//                         </div>
//                     </div>
//                     <hr />                                                        
//                     <div className="row">
//                         <div className="col-md-6">
//                             <strong>Gender: </strong>
//                             {patient.gender}
//                         </div>
//                         <div className="col-md-6">
//                             <strong>Date: </strong>
//                             {patient.nursesNote.date}
//                         </div>
//                     </div>
//                     <hr />
//                     <strong>Patient temperature: </strong>
//                     {patient.nursesNote.temperature}
//                     <hr />
//                     <strong>Urine output: </strong>
//                     {patient.nursesNote.urineOutput}
//                     <hr />
//                     <strong>Nurses Notes: </strong>
//                     {patient.nursesNote.notes}
//                     <hr />
//                     <strong>Summary: </strong>
//                     {patient.nursesNote.summary}
//                     </div>
//                     <div className="modal-footer">
//                         <button type="button" className="btn btn-secondary">Bio-data</button>
//                         <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Discharge</button>
//                     </div>
//                 </div>
//                 {/* patient bio-data end */}
//             </div>
//     )
// }

// export default bioData;