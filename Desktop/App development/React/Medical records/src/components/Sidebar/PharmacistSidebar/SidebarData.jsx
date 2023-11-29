import React from 'react';
import { FaUserCircle, FaDoorOpen } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { RiMedicineBottleFill } from "react-icons/ri";


export const SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        title: "Dashboard",
        link: "/PharmacistDashboard"
    },    
    {
        icon: <BsFillBoxSeamFill />,
        title: "Supplies",
        link: "/PharmacistDashboard/Supplies"
    },   
    {
        icon: <RiMedicineBottleFill />,
        title: "Dispense",
        link: "/PharmacistDashboard/Dispense"
    },
    {
        icon: <FaUserCircle />,
        title: "Profile",
        link: "/PharmacistDashboard/Profile"
    }
]
