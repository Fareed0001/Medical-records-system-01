import React from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";

export const SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        title: "Dashboard",
        link: "/LaboratoristDashboard"
    },
    {
        icon: <GiTestTubes />,
        title: "Perform Test",
        link: "/LaboratoristDashboard/Test"
    },
    {
        icon: <FaUserCircle />,
        title: "Profile",
        link: "/LaboratoristDashboard/Profile"
    }
]
