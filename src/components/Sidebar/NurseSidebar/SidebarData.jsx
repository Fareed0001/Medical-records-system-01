import React from 'react';
import { MdDateRange, MdQueue } from "react-icons/md";
import { FaUserCircle, FaDoorOpen } from "react-icons/fa";
import { BsFillSendPlusFill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { GiNotebook } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";

export const SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        title: "Dashboard",
        link: "/NurseDashboard"
    },
    {
        icon: <MdQueue />,
        title: "Admission",
        link: "/NurseDashboard/Admission"
    },
    {
        icon: <MdDateRange />,
        title: "Appointment",
        link: "/NurseDashboard/Appointment"
    },
    {
        icon: <GiNotebook />,
        title: "Note",
        link: "/NurseDashboard/NursesNote"
    },
    {
        icon: <BsFillSendPlusFill />,
        title: "Doctor Request",
        link: "/NurseDashboard/DoctorsRequest"
    },
    {
        icon: <FaDoorOpen />,
        title: "Discharge",
        link: "/NurseDashboard/DischargePatient"
    },
    {
        icon: <FaUserCircle />,
        title: "Profile",
        link: "/NurseDashboard/Profile"
    }
]
