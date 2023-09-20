import React from 'react';
import { BsUnity } from "react-icons/bs";
import {
    FaUserInjured,
    FaUserCircle
} from "react-icons/fa";
import {
    FaUserDoctor,
    FaUserNurse,
    FaUserTie,
    FaPills
} from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import {
    MdSpaceDashboard,
    MdAccountBalanceWallet
} from "react-icons/md";

export const SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        title: "Dashboard",
        link: "/AdminDashboard"
    },
    {
        icon: <BsUnity />,
        title: "Department",
        link: "/AdminDashboard/Department"
    },
    {
        icon: <FaUserDoctor />,
        title: "Doctor",
        link: "/AdminDashboard/Doctor"
    },
    {
        icon: <FaUserNurse />,
        title: "Nurse",
        link: "/AdminDashboard/Nurse"
    },
    {
        icon: <FaUserInjured />,
        title: "Patient",
        link: "/AdminDashboard/Patient"
    },
    {
        icon: <FaPills />,
        title: "Pharmacist",
        link: "/AdminDashboard/Pharmacist"
    },
    {
        icon: <ImLab />,
        title: "Laboratorist",
        link: "/AdminDashboard/Laboratorist"
    },
    {
        icon: <MdAccountBalanceWallet />,
        title: "Accountant",
        link: "/AdminDashboard/Accountant"
    },
    {
        icon: <FaUserTie />,
        title: "Receptionist",
        link: "/AdminDashboard/Receptionist"
    },
    {
        icon: <FaUserCircle />,
        title: "Profile",
        link: "/AdminDashboard/Profile"
    }
]
