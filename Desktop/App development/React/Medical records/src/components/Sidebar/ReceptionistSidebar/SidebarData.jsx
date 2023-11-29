import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

export const SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        title: "Dashboard",
        link: "/ReceptionistDashboard"
    },
    {
        icon: <MdDateRange />,
        title: "Appointment",
        link: "/ReceptionistDashboard/Appointment"
    },
    {
        icon: <FaUserCircle />,
        title: "Profile",
        link: "/ReceptionistDashboard/Profile"
    }
]
