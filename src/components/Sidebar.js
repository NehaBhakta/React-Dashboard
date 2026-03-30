import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoFull from "../assets/logo-full.svg";
import logoSmall from "../assets/logo-small.svg";

import Dashboardicon from "../assets/icons/Dashboardicon";
import InsightIcon from "../assets/icons/InsightIcon";
import InvoicesIcon from "../assets/icons/InvoicesIcon";
import ProductsIcon from "../assets/icons/ProductsIcon";
import ReimburseIcon from "../assets/icons/ReimburseIcon";
import Messageicon from "../assets/icons/Messageicon";
import Settingicon from "../assets/icons/Settingicon";
import InfocircleIcon from "../assets/icons/InfocircleIcon";
import Toggleicon from "../assets/icons/Toggleicon";
import LogOuticon from "../assets/icons/LogOuticon";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Home", icon: <Dashboardicon />, path: "/" },
    { name: "Insight", icon: <InsightIcon />, path: "/Insight" },
    { name: "Invoices", icon: <InvoicesIcon />, path: "/Invoices" },
    { name: "Products", icon: <ProductsIcon />, path: "/Products" },
    { name: "Reimburse", icon: <ReimburseIcon />, path: "/Reimburse" },
    { name: "Inbox", icon: <Messageicon />, path: "/Inbox" },
    { name: "People & Teams", icon: <Messageicon />, path: "/People & Teams" },
    { name: "Settings", icon: <Settingicon />, path: "/settings" },
    { name: "Help & Center", icon: <InfocircleIcon />, path: "/Help & Center" },
    { name: "Dark Mode", icon: <Settingicon />, path: "/Dark Mode" },
  ];

  return (
    <div
      className={`h-screen bg-white top-0 left-0 transition-all duration-300 border-r border-[#F3F5F7] absolute z-50 sm:relative 
      ${isOpen ? "w-72" : "w-24"}`}
    >
      {/* Logo */}
      <div className="flex items-center justify-start p-4 mt-4">
        <img
          src={isOpen ? logoFull : logoSmall}
          alt="Logo"
          className="w-auto transition-all duration-300"
        />
      </div>

      {/* Toggle Button */}
      <div className="absolute top-8 right-[-15px] z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Toggleicon size={25} />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="mt-6 overflow-y-auto max-h-[calc(100vh-190px)] scrollbar">
        <span className={`text-sm font-medium truncate text-[#596780] pl-8 pr-4 tracking-[-0.02em] mb-3 block ${isOpen ?  "text-sm" : "text-[0px] hidden "}`}>
          Main Menu
        </span>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path; 
          return (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center gap-4 p-4 pr-4 rounded-xl transition-all duration-200 ml-4 mr-4
                ${
                  isActive
                    ? "bg-[#40A198] text-white font-medium"
                    : "text-[#596780] hover:bg-gray-100"
                }
                ${isOpen ? "pl-8 justify-start" :  "pl-4 justify-center"}
                `}
              >
                <span>{React.cloneElement(item.icon, {
                  fillColor: isActive ? "#FFFFFF" : "#596780",
                })}</span>
                {isOpen && (
                  <span className="text-[18px] truncate tracking-[-0.02em] font-normal">
                    {item.name}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="mt-2 ml-4 mr-4 mb-3 absolute bottom-0">
        <li>
        <Link
          className={`flex items-center gap-4 p-4 pr-4 rounded-xl transition-all duration-200  ${isOpen ? "pl-8 justify-start" :  "pl-4 justify-center" }`}>
                <span>
                  <LogOuticon/>
                </span>
                {isOpen && (
                  <span className="text-[18px] truncate tracking-[-0.02em] font-normal text-[#596780]">
                    Log Out
                  </span>
                )}
              </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
