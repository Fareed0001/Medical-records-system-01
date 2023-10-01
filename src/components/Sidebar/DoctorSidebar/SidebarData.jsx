import React from 'react';
import { MdDateRange, MdQueue } from "react-icons/md";
import {
    FaUserInjured,
    FaDiagnoses,
    FaUserCircle
} from "react-icons/fa";
import {
    FaPills
} from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { GiHeartBeats } from "react-icons/gi";
import {
    MdSpaceDashboard,
    MdHistoryEdu
} from "react-icons/md";

export const SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        title: "Dashboard",
        link: "/DoctorDashboard"
    },
    {
        icon: <MdDateRange />,
        title: "Appointments",
        link: "/DoctorDashboard/Appointment"
    },
    {
        icon: <MdQueue />,
        title: "Queue",
        link: "/DoctorDashboard/Queue"
    },
    {
        icon: <GiHeartBeats />,
        title: "Vital",
        link: "/DoctorDashboard/Vitals"
    },
    {
        icon: <FaUserInjured />,
        title: "Patient",
        link: "/DoctorDashboard/Patient"
    },
    {
        icon: <FaPills />,
        title: "Prescription",
        link: "/DoctorDashboard/Prescription"
    },
    {
        icon: <CgNotes />,
        title: "Examination",
        link: "/DoctorDashboard/Examination"
    },
    {
        icon: <MdHistoryEdu />,
        title: "History",
        link: "/DoctorDashboard/History"
    },
    {
        icon: <FaDiagnoses />,
        title: "Diagnosis",
        link: "/DoctorDashboard/Diagnosis"
    },
    {
        icon: <FaUserCircle />,
        title: "Profile",
        link: "/DoctorDashboard/Profile"
    }
]
