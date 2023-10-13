export const patientData = [

  // Patient 1
  {
    key: 1,
    medicalRecordNumber: 'MRN001',
    name: 'John Doe',
    gender: 'Male',
    dateOfBirth: '01/15/1980',
    primaryCarePhysician: 'Dr. Smith',
    allergies: 'Penicillin',
    phone: '+1234567890',
    bloodGroup: 'A+',
    disease: "Hypertension",
    appointmentDate: "10/10/2023",
    address: '123 Main Street, Anytown, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Chest pain',
      historyOfPresentingComplaint: 'Pain started two days ago',
      pastMedicalHistory: 'Hypertension',
      drugHistory: 'Aspirin',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker, occasional alcohol',
      summary: 'Patient presented with chest pain, likely due to hypertension.'
    },
    nursesNote: {
      temperature: '98.6°F',
      urineOutput: 'Normal',
      date: '10/15/2023',
      summary: "Patient's vitals are stable.",
      notes: 'The patient\'s temperature is within the normal range. Urine output is normal. No concerning symptoms observed.',
    },
    // Add lab report
    labReport: {
      results: 'Normal blood count, elevated cholesterol',
      recommendations: 'Continue medication for hypertension, start statin for cholesterol.'
    },
    // Add prescription
    prescription: {
      drug: 'Aspirin',
      dispensingInstructions: 'Take one tablet daily with food.'
    },
    ward: {
      name: 'Cardiology Ward',
      wardType: 'Specialty',
      operatingTime: '24/7',
      description: 'Dedicated to heart-related illnesses.',
      capacity: 30,
      manager: 'Dr. John Smith',
      nurses: ['Nurse A', 'Nurse B', 'Nurse C'],
      facilitiesEquipment: ['ECG machines', 'Cardiac monitors', 'Defibrillators'],
    },
    // Add discharge summary
    dischargeSummary: {
      hospitalCourse: 'Admitted for chest pain evaluation.',
      reasonForAdmission: 'Chest pain and hypertension',
      findings: 'Elevated blood pressure, normal ECG',
      treatment: 'Medication for hypertension, lifestyle advice',
      progressAndComplications: 'Stable condition, no complications',
      dischargeDiagnosis: 'Hypertension'
    },
    // Add radiology report
    radiologyReport: {
      studyDetails: 'Chest X-ray',
      findings: 'No abnormalities detected',
      diagnosis: 'No acute chest issues'
    }
  },

  // Patient 2
  {
    key: 2,
    medicalRecordNumber: 'MRN002',
    name: 'Jane Smith',
    gender: 'Female',
    dateOfBirth: '05/20/1990',
    primaryCarePhysician: 'Dr. Johnson',
    allergies: 'None',
    phone: '+1987654321',
    bloodGroup: 'O-',
    disease: "Asthma",
    appointmentDate: "17/10/2023",
    address: '456 Elm Street, Othertown, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Fever and cough',
      historyOfPresentingComplaint: 'Cough started a week ago, fever for two days',
      pastMedicalHistory: 'Asthma',
      drugHistory: 'Inhaler for asthma',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with fever and cough, likely due to asthma.'
    },
    nursesNote: {
      temperature: '99.0°F',
      urineOutput: 'Normal',
      date: '10/15/2023',
      summary: 'Patient is recovering well after surgery.',
      notes: 'The patient\'s temperature is slightly elevated but within an acceptable range. Urine output is normal, and the patient is in good spirits.',
    },
    // Add lab report
    labReport: {
      results: 'Elevated white blood cell count',
      recommendations: 'Start antibiotics for suspected infection.'
    },
    // Add prescription
    prescription: {
      drug: 'Antibiotics',
      dispensingInstructions: 'Take one tablet every 8 hours for 7 days.'
    }
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 3
  {
    key: 3,
    medicalRecordNumber: 'MRN003',
    name: 'Michael Johnson',
    gender: 'Male',
    dateOfBirth: '09/30/1975',
    primaryCarePhysician: 'Dr. Davis',
    allergies: 'Sulfonamide',
    phone: '+1122334455',
    bloodGroup: 'B+',
    address: '789 Oak Street, Anycity, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Fractured leg',
      historyOfPresentingComplaint: 'Fell while running',
      pastMedicalHistory: 'None',
      drugHistory: 'Painkillers',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker, moderate drinker',
      summary: 'Patient presented with a fractured leg due to a fall.'
    },
    nursesNote: {
      temperature: '98.2°F',
      urineOutput: 'Normal',
      date: '10/15/2023',
      summary: 'Patient is recovering from a fracture.',
      notes: 'The patient\'s temperature is normal. Urine output is as expected. The patient is following the treatment plan diligently.',
    },
    // Add lab report
    labReport: {
      results: 'Normal blood tests',
      recommendations: 'Monitor and manage pain, follow-up appointments.'
    },
    // Add prescription
    prescription: {
      drug: 'Painkillers',
      dispensingInstructions: 'Take one tablet every 6 hours as needed for pain.'
    }
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 4
  {
    key: 4,
    medicalRecordNumber: 'MRN004',
    name: 'Emily Davis',
    gender: 'Female',
    dateOfBirth: '03/10/1988',
    primaryCarePhysician: 'Dr. Wilson',
    allergies: 'Peanuts',
    phone: '+144996633',
    bloodGroup: 'AB-',
    disease: "Ulcer",
    appointmentDate: "26/10/2023",
    address: '101 Pine Street, Somewhere, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Abdominal pain',
      historyOfPresentingComplaint: 'Pain in the lower abdomen',
      pastMedicalHistory: 'Gastric ulcers',
      drugHistory: 'Proton pump inhibitors',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with abdominal pain, likely due to gastric ulcers.'
    },
    nursesNote: {
      temperature: '98.8°F',
      urineOutput: 'Normal',
      date: '10/15/2023',
      summary: 'Patient underwent successful surgery.',
      notes: 'The patient successfully underwent surgery and is in stable condition. Vital signs are within normal ranges.',
    },
    // Add lab report
    labReport: {
      results: 'Positive for H. pylori infection',
      recommendations: 'Start antibiotics for H. pylori eradication.'
    },
    // Add prescription
    prescription: {
      drug: 'Antibiotics',
      dispensingInstructions: 'Take one tablet every 12 hours for 14 days.'
    },
    ward: {
      name: 'Pediatrics Ward',
      wardType: 'General',
      operatingTime: '24/7',
      description: "Caring for children's health.",
      capacity: 25,
      manager: 'Dr. Emily Johnson',
      nurses: ['Nurse X', 'Nurse Y', 'Nurse Z'],
      facilitiesEquipment: ['Baby cribs', 'Play area', 'Pediatric beds'],
    },
    // Add discharge summary
    dischargeSummary: {
      hospitalCourse: 'Admitted for abdominal pain evaluation.',
      reasonForAdmission: 'Abdominal pain and gastric ulcers',
      findings: 'Positive for H. pylori infection',
      treatment: 'Antibiotics for infection, proton pump inhibitors for ulcers',
      progressAndComplications: 'Stable condition, infection treated successfully',
      dischargeDiagnosis: 'Gastric ulcers and H. pylori infection'
    },
    // Add radiology report
    radiologyReport: {
      studyDetails: 'Abdominal Ultrasound',
      findings: 'No structural abnormalities detected',
      diagnosis: 'No acute abdominal issues'
    }
  },

  // Patient 5
  {
    key: 5,
    medicalRecordNumber: 'MRN005',
    name: 'David Wilson',
    gender: 'Male',
    dateOfBirth: '11/05/1995',
    primaryCarePhysician: 'Dr. Martinez',
    allergies: 'Shellfish',
    phone: '+1223344556',
    bloodGroup: 'O+',
    address: '246 Cedar Street, Nowhere, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Headache',
      historyOfPresentingComplaint: 'Frequent headaches for the past week',
      pastMedicalHistory: 'Migraines',
      drugHistory: 'Prescribed migraine medication',
      familyHistory: 'Family history of migraines',
      socialHistory: 'Non-smoker, non-drinker',
      summary: 'Patient presented with recurrent headaches, likely due to migraines.'
    },
    // Add lab report
    labReport: {
      results: 'Normal blood tests',
      recommendations: 'Continue migraine medication and maintain a headache diary.'
    },
    // Add prescription
    prescription: {
      drug: 'Migraine Medication',
      dispensingInstructions: 'Take one tablet at the onset of a headache, record symptoms in a diary.'
    },
    ward: {
      name: 'Orthopedics Ward',
      wardType: 'Specialty',
      operatingTime: '24/7',
      description: 'Focus on musculoskeletal issues.',
      capacity: 20,
      manager: 'Dr. Michael Brown',
      nurses: ['Nurse P', 'Nurse Q', 'Nurse R'],
      facilitiesEquipment: ['X-ray machines', 'Orthopedic beds', 'Crutches'],
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 6
  {
    key: 6,
    medicalRecordNumber: 'MRN006',
    name: 'Amina Aliyu',
    gender: 'Female',
    dateOfBirth: '11/08/1987',
    primaryCarePhysician: 'Dr. Abubakar',
    allergies: 'Dust',
    phone: '+2348012345678',
    bloodGroup: 'B+',
    disease: "Asthma",
    appointmentDate: "13/10/2023",
    address: '123 Lagos Street, Lagos',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Respiratory infection',
      historyOfPresentingComplaint: 'Cough, fever, and shortness of breath',
      pastMedicalHistory: 'Asthma',
      drugHistory: 'Inhaler for asthma, antihistamines',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with symptoms of a respiratory infection, likely due to asthma.'
    },
    // Add lab report
    labReport: {
      results: 'Elevated white blood cell count',
      recommendations: 'Start antibiotics and continue asthma management.'
    },
    // Add prescription
    prescription: {
      drug: 'Antibiotics',
      dispensingInstructions: 'Take one tablet every 8 hours for 7 days.'
    }
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 7
  {
    key: 7,
    medicalRecordNumber: 'MRN007',
    name: 'Chukwudi Eze',
    gender: 'Male',
    dateOfBirth: '06/25/1992',
    primaryCarePhysician: 'Dr. Nwankwo',
    allergies: 'Pollen',
    phone: '+2348023456789',
    bloodGroup: 'O+',
    address: '456 Abuja Road, Abuja',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Respiratory infection',
      historyOfPresentingComplaint: 'Cough, fever, and shortness of breath',
      pastMedicalHistory: 'Seasonal allergies',
      drugHistory: 'Antihistamines for allergies',
      familyHistory: 'Family history of allergies',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with symptoms of a respiratory infection, likely due to seasonal allergies.'
    },
    nursesNote: {
      temperature: '98.7°F',
      urineOutput: 'Normal',
      date: '10/15/2023',
      summary: 'Patient is recovering from a respiratory infection.',
      notes: 'The patient is responding well to treatment for a respiratory infection. Vital signs are improving.',
    },
    // Add lab report
    labReport: {
      results: 'Elevated white blood cell count',
      recommendations: 'Start antibiotics and continue allergy management.'
    },
    // Add prescription
    prescription: {
      drug: 'Antibiotics',
      dispensingInstructions: 'Take one tablet every 8 hours for 7 days.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 8
  {
    key: 8,
    medicalRecordNumber: 'MRN008',
    name: 'Nneka Okoro',
    gender: 'Female',
    dateOfBirth: '02/17/1983',
    primaryCarePhysician: 'Dr. Okafor',
    allergies: 'None',
    phone: '+2348034567890',
    bloodGroup: 'A-',
    address: '789 Enugu Avenue, Enugu',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Minor injury',
      historyOfPresentingComplaint: 'Fell and sustained a minor injury to the arm',
      pastMedicalHistory: 'No significant medical history',
      drugHistory: 'Pain relief medication',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with a minor injury to the arm; no underlying medical conditions.'
    },
    nursesNote: {
      temperature: '98.4°F',
      urineOutput: 'Normal',
      date: '10/15/2023',
      summary: 'Patient is recovering from a minor injury.',
      notes: 'The patient sustained a minor injury but is recovering well. Vital signs are stable.',
    },
    // Add lab report
    labReport: {
      results: 'No abnormalities in blood tests',
      recommendations: 'Pain relief and rest for recovery.'
    },
    // Add prescription
    prescription: {
      drug: 'Pain Relief Medication',
      dispensingInstructions: 'Take as needed for pain relief.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 9
  {
    key: 9,
    medicalRecordNumber: 'MRN009',
    name: 'Efe Ojo',
    gender: 'Male',
    dateOfBirth: '09/10/1979',
    primaryCarePhysician: 'Dr. Onyema',
    allergies: 'Shellfish',
    phone: '+2347045678901',
    bloodGroup: 'B-',
    address: '321 Kano Lane, Kano',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Surgery recovery',
      historyOfPresentingComplaint: 'Underwent surgery and in the recovery phase',
      pastMedicalHistory: 'No significant medical history',
      drugHistory: 'Post-surgery medication',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker',
      summary: 'Patient underwent surgery and is in the recovery phase. No complications.'
    },
    nursesNote: {
      temperature: '98.9°F',
      urineOutput: 'Normal',
      date: '10/15/2023',
      summary: 'Patient is recovering from surgery.',
      notes: 'The patient underwent surgery and is in the recovery phase. Vital signs are being monitored closely.',
    },
    // Add lab report
    labReport: {
      results: 'Normal post-surgery blood tests',
      recommendations: 'Continue post-surgery medication and monitoring.'
    },
    // Add prescription
    prescription: {
      drug: 'Post-Surgery Medication',
      dispensingInstructions: 'Follow post-surgery medication instructions.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 10
  {
    key: 10,
    medicalRecordNumber: 'MRN010',
    name: 'Rasheed Ahmed',
    gender: 'Male',
    dateOfBirth: '04/04/1986',
    primaryCarePhysician: 'Dr. Adeyemi',
    allergies: 'Nuts',
    phone: '+2347056789012',
    bloodGroup: 'AB+',
    address: '567 Ibadan Close, Ibadan',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Allergic reaction',
      historyOfPresentingComplaint: 'Experienced an allergic reaction after consuming nuts',
      pastMedicalHistory: 'Known nut allergy',
      drugHistory: 'Antihistamines for allergies',
      familyHistory: 'Family history of allergies',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with an allergic reaction due to nuts; known nut allergy.'
    },
    nursesNote: {
      temperature: '98.3°F',
      urineOutput: 'Normal',
      date: '10/15/2023',
      summary: 'Patient is recovering from an allergic reaction.',
      notes: 'The patient had an allergic reaction but is now stable. Allergic symptoms have subsided.',
    },
    // Add lab report
    labReport: {
      results: 'Elevated IgE levels indicative of allergy',
      recommendations: 'Avoid nuts, carry antihistamines.'
    },
    // Add prescription
    prescription: {
      drug: 'Antihistamines (e.g., Cetirizine)',
      dispensingInstructions: 'Take one tablet daily as needed for allergies.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 11
  {
    key: 11,
    medicalRecordNumber: 'MRN011',
    name: 'Olufemi Afolabi',
    gender: 'Male',
    dateOfBirth: '12/12/1970',
    primaryCarePhysician: 'Dr. Adewale',
    allergies: 'None',
    phone: '+2347067890123',
    bloodGroup: 'O+',
    address: '987 Lagos Road, Lagos',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'General check-up',
      historyOfPresentingComplaint: 'Routine health check-up',
      pastMedicalHistory: 'No significant medical history',
      drugHistory: 'No regular medication',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker',
      summary: 'Routine health check-up; patient has no specific health concerns.'
    },
    // Add lab report
    labReport: {
      results: 'All lab tests within normal ranges',
      recommendations: 'Continue routine health maintenance.'
    },
    // Add prescription
    prescription: {
      drug: 'No prescription needed',
      dispensingInstructions: 'No medication required at this time.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 12
  {
    key: 12,
    medicalRecordNumber: 'MRN012',
    name: 'Chinwe Obi',
    gender: 'Female',
    dateOfBirth: '08/23/1985',
    primaryCarePhysician: 'Dr. Eze',
    allergies: 'None',
    phone: '+2348078901234',
    bloodGroup: 'A+',
    address: '543 Enugu Street, Enugu',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'General check-up',
      historyOfPresentingComplaint: 'Routine health check-up',
      pastMedicalHistory: 'No significant medical history',
      drugHistory: 'No regular medication',
      familyHistory: 'No significant family history',
      socialHistory: 'Non-smoker',
      summary: 'Routine health check-up; patient has no specific health concerns.'
    },
    // Add lab report
    labReport: {
      results: 'All lab tests within normal ranges',
      recommendations: 'Continue routine health maintenance.'
    },
    // Add prescription
    prescription: {
      drug: 'No prescription needed',
      dispensingInstructions: 'No medication required at this time.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 13
  {
    key: 13,
    medicalRecordNumber: 'MRN013',
    name: 'Aliyu Musa',
    gender: 'Male',
    dateOfBirth: '03/15/1993',
    primaryCarePhysician: 'Dr. Sani',
    allergies: 'Peanuts',
    phone: '+2347012345678',
    bloodGroup: 'B-',
    address: '753 Kano Avenue, Kano',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Allergic reaction',
      historyOfPresentingComplaint: 'Experienced an allergic reaction after consuming peanuts',
      pastMedicalHistory: 'Known peanut allergy',
      drugHistory: 'Epinephrine for allergies',
      familyHistory: 'Family history of allergies',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with an allergic reaction due to peanuts; known peanut allergy.'
    },
    // Add lab report
    labReport: {
      results: 'Elevated IgE levels indicative of allergy',
      recommendations: 'Avoid peanuts, carry an epinephrine auto-injector.'
    },
    // Add prescription
    prescription: {
      drug: 'Epinephrine Auto-Injector',
      dispensingInstructions: 'Carry the auto-injector at all times.'
    },
    ward: {
      name: 'Surgical Ward',
      wardType: 'General',
      operatingTime: '24/7',
      description: 'Post-surgery recovery and care.',
      capacity: 40,
      manager: 'Dr. Sarah White',
      nurses: ['Nurse M', 'Nurse N', 'Nurse O'],
      facilitiesEquipment: ['Surgical beds', 'Medical supplies', 'Recovery rooms'],
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 14
  {
    key: 14,
    medicalRecordNumber: 'MRN014',
    name: 'Aisha Abdullahi',
    gender: 'Female',
    dateOfBirth: '07/02/1980',
    primaryCarePhysician: 'Dr. Ahmed',
    allergies: 'None',
    phone: '+2347012345678',
    bloodGroup: 'O+',
    address: '123 Kaduna Road, Kaduna',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Routine check-up',
      historyOfPresentingComplaint: 'No specific complaints, routine check-up',
      pastMedicalHistory: 'Generally healthy',
      drugHistory: 'No ongoing medications',
      familyHistory: 'No significant family medical history',
      socialHistory: 'Non-smoker, occasional exercise',
      summary: 'Patient presented for a routine check-up, no specific health issues reported.'
    },
    // Add lab report
    labReport: {
      results: 'All blood test parameters within normal range',
      recommendations: 'Continue routine check-ups, maintain a healthy lifestyle.'
    },
    // Add prescription
    prescription: {
      drug: 'None',
      dispensingInstructions: 'No medications prescribed.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 15
  {
    key: 15,
    medicalRecordNumber: 'MRN015',
    name: 'Yusuf Ibrahim',
    gender: 'Male',
    dateOfBirth: '09/08/1982',
    primaryCarePhysician: 'Dr. Ali',
    allergies: 'Shellfish',
    phone: '+2347012345678',
    bloodGroup: 'AB+',
    address: '456 Sokoto Street, Sokoto',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Allergic reaction',
      historyOfPresentingComplaint: 'Experienced an allergic reaction after consuming shellfish',
      pastMedicalHistory: 'Known shellfish allergy',
      drugHistory: 'Epinephrine auto-injector for allergies',
      familyHistory: 'Family history of allergies',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with an allergic reaction due to shellfish; known shellfish allergy.'
    },
    // Add lab report
    labReport: {
      results: 'Elevated IgE levels indicative of allergy',
      recommendations: 'Avoid shellfish, carry epinephrine auto-injector.'
    },
    // Add prescription
    prescription: {
      drug: 'Epinephrine auto-injector (e.g., EpiPen)',
      dispensingInstructions: 'Carry at all times and use as directed in case of allergic reaction.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  // Patient 16
  {
    key: 16,
    medicalRecordNumber: 'MRN017',
    name: 'Sophia Garcia',
    gender: 'Female',
    dateOfBirth: '02/25/1998',
    primaryCarePhysician: 'Dr. Rodriguez',
    allergies: 'Dairy',
    phone: '+1987654321',
    bloodGroup: 'O-',
    address: '789 Maple Avenue, Another City, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Lactose intolerance symptoms',
      historyOfPresentingComplaint: 'Experienced digestive issues after consuming dairy products',
      pastMedicalHistory: 'Known lactose intolerance',
      drugHistory: 'Lactase supplements for lactose intolerance',
      familyHistory: 'No significant family medical history',
      socialHistory: 'Non-smoker, avoids dairy products',
      summary: 'Patient presented with symptoms of lactose intolerance after consuming dairy products; known lactose intolerance.'
    },
    // Add lab report
    labReport: {
      results: 'Lactase deficiency confirmed',
      recommendations: 'Continue lactase supplements, avoid dairy products.'
    },
    // Add prescription
    prescription: {
      drug: 'Lactase supplements (e.g., Lactaid)',
      dispensingInstructions: 'Take as needed with dairy-containing meals.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  {
    key: 17,
    medicalRecordNumber: 'MRN018',
    name: 'William Brown',
    gender: 'Male',
    dateOfBirth: '11/12/1978',
    primaryCarePhysician: 'Dr. Johnson',
    allergies: 'None',
    phone: '+1234567890',
    bloodGroup: 'A+',
    address: '567 Oak Street, Somewhere, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Annual check-up',
      historyOfPresentingComplaint: 'No specific complaints, annual health check-up',
      pastMedicalHistory: 'Generally healthy',
      drugHistory: 'No ongoing medications',
      familyHistory: 'No significant family medical history',
      socialHistory: 'Non-smoker, regular exercise',
      summary: 'Patient presented for an annual health check-up, no specific health issues reported.'
    },
    // Add lab report
    labReport: {
      results: 'All health parameters within normal range',
      recommendations: 'Continue healthy lifestyle, follow up annually.'
    },
    // Add prescription
    prescription: {
      drug: 'None',
      dispensingInstructions: 'No medications prescribed.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  {
    key: 18,
    medicalRecordNumber: 'MRN019',
    name: 'Isabella Martinez',
    gender: 'Female',
    dateOfBirth: '07/19/1986',
    primaryCarePhysician: 'Dr. Davis',
    allergies: 'Shellfish',
    phone: '+1122334455',
    bloodGroup: 'B+',
    address: '101 Elm Street, Anytown, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Mild allergic reaction',
      historyOfPresentingComplaint: 'Experienced a mild allergic reaction after eating shellfish',
      pastMedicalHistory: 'Known shellfish allergy',
      drugHistory: 'Antihistamines for allergies',
      familyHistory: 'Family history of allergies',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with a mild allergic reaction due to shellfish; known shellfish allergy.'
    },
    // Add lab report
    labReport: {
      results: 'Elevated IgE levels indicative of allergy',
      recommendations: 'Avoid shellfish, carry antihistamines.'
    },
    // Add prescription
    prescription: {
      drug: 'Antihistamines (e.g., Benadryl)',
      dispensingInstructions: 'Use as needed in case of allergic reaction.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  {
    key: 20,
    medicalRecordNumber: 'MRN021',
    name: 'Liam Taylor',
    gender: 'Male',
    dateOfBirth: '03/21/1987',
    primaryCarePhysician: 'Dr. Walker',
    allergies: 'None',
    phone: '+1987654321',
    bloodGroup: 'A+',
    disease: "Flu",
    appointmentDate: "30/10/2023",
    address: '345 Elm Street, Other City, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Sore throat and cough',
      historyOfPresentingComplaint: 'Complains of a sore throat and persistent cough for a week',
      pastMedicalHistory: 'No significant medical history',
      drugHistory: 'None',
      familyHistory: 'No specific family medical history',
      socialHistory: 'Non-smoker',
      summary: 'Patient presented with a sore throat and cough, likely due to a viral infection. No significant medical history.'
    },
    // Add lab report
    labReport: {
      results: 'Elevated white blood cell count, indicative of an infection',
      recommendations: 'Rest, drink fluids, and consider over-the-counter cold remedies.'
    },
    // Add prescription
    prescription: {
      drug: 'Over-the-counter cough syrup and pain relievers',
      dispensingInstructions: 'Use as directed on the labels.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  {
    key: 21,
    medicalRecordNumber: 'MRN022',
    name: 'Olivia Harris',
    gender: 'Female',
    dateOfBirth: '09/15/1991',
    primaryCarePhysician: 'Dr. Miller',
    allergies: 'None',
    phone: '+1122334455',
    bloodGroup: 'B+',
    address: '789 Oak Street, Anytown, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Routine check-up',
      historyOfPresentingComplaint: 'No specific complaints, annual health check-up',
      pastMedicalHistory: 'Generally healthy',
      drugHistory: 'No ongoing medications',
      familyHistory: 'No significant family medical history',
      socialHistory: 'Non-smoker, moderate exercise',
      summary: 'Patient presented for an annual health check-up, no specific health issues reported.'
    },
    // Add lab report
    labReport: {
      results: 'All health parameters within normal range',
      recommendations: 'Continue healthy lifestyle, follow up annually.'
    },
    // Add prescription
    prescription: {
      drug: 'None',
      dispensingInstructions: 'No medications prescribed.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },

  {
    key: 22,
    medicalRecordNumber: 'MRN023',
    name: 'Noah Wright',
    gender: 'Male',
    dateOfBirth: '06/20/1980',
    primaryCarePhysician: 'Dr. Turner',
    allergies: 'Pollen',
    phone: '+144996633',
    bloodGroup: 'AB-',
    address: '101 Pine Street, Somewhere, USA',
    // Add doctor's note
    doctorsNote: {
      presentingComplaint: 'Seasonal allergies',
      historyOfPresentingComplaint: 'Experiencing symptoms of seasonal allergies (sneezing, itchy eyes)',
      pastMedicalHistory: 'Known pollen allergy',
      drugHistory: 'Antihistamines for allergies',
      familyHistory: 'Family history of allergies',
      socialHistory: 'Non-smoker, regular exercise',
      summary: 'Patient presented with symptoms of seasonal allergies, known pollen allergy.'
    },
    // Add lab report
    labReport: {
      results: 'Elevated IgE levels indicative of allergy',
      recommendations: 'Continue antihistamines, avoid pollen exposure.'
    },
    // Add prescription
    prescription: {
      drug: 'Antihistamines (e.g., Claritin)',
      dispensingInstructions: 'Take as directed, especially during allergy season.'
    },
    // Additional patient information (ward, discharge summary, radiology report) can be added as needed.
  },
];