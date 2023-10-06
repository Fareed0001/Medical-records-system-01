import React from 'react';
import { MdDateRange, MdQueue } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";

export const SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        title: "Dashboard",
        link: "/DoctorDashboard"
    },
    {
        icon: <MdDateRange />,
        title: "Appointment",
        link: "/DoctorDashboard/Appointment"
    },
    {
        icon: <MdQueue />,
        title: "Admission",
        link: "/DoctorDashboard/Admission"
    },
    {
        icon: <GrNotes />,
        title: "Nurses note",
        link: "/DoctorDashboard/NursesNote"
    },
    {
        icon: <FaUserCircle />,
        title: "Profile",
        link: "/DoctorDashboard/Profile"
    }
]
