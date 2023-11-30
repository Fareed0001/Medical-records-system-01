import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdPayments } from "react-icons/md";

export const SidebarData = [
    {
        icon: <MdSpaceDashboard />,
        title: "Dashboard",
        link: "/CashierDashboard"
    },
    {
        icon: <MdPayments />,
        title: "Paid",
        link: "/CashierDashboard/Paid"
    },
    {
        icon: <FaUserCircle />,
        title: "Profile",
        link: "/CashierDashboard/Profile"
    }
]
