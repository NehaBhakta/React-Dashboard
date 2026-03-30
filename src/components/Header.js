import React, { useState } from "react";
import { FiBell, FiChevronDown, FiLogOut, FiUser } from "react-icons/fi";
import profileImg from "../assets/profile.png"; 
import Serchicon from "../assets/icons/Serchicon";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200  px-8 md:px-6 py-4 sticky top-0 z-10">
      
     
      <div className="flex items-center gap-3 w-full md:w-auto">

        {/* Search Section */}
          <div class="items-center border px-3 py-3 border-[#C3D4E9] rounded-full hidden md:flex w-full lg:w-96">
            <Serchicon clasName="mr-2"/>        
            <input 
              type="text" 
              placeholder="Search something here" 
              class="w-full outline-none text-[14px] truncate tracking-[-0.02em] font-semibold text-[#1A202C] border-[#C3D4E9] rounded-full "
            />
          </div>

      </div>

      {/* ---------- header right---------- */}
      <div className="flex items-center gap-5 md:gap-6 ml-auto">
        <button className="relative w-10 h-10 border border-[#C3D4E9] rounded-full flex justify-center items-center">
          <div className="flex items-center">
            <FiBell size={22} className="text-[#292D32] hover:text-[#40A198]" />
            <span className="absolute -top-1 -right-1 bg-[#FF4423] text-white text-[10px] rounded-full px-[4px] w-3 h-3 rounded-e-full">  
            </span>
          </div>
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            className="flex items-center gap-2 focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-9 h-9 rounded-full border border-gray-200"
            />
            <span className=" text-[16px] truncate tracking-[-0.02em] font-semibold text-[#1A202C]">John Cornors</span>
            <FiChevronDown
              size={18}
              className={`text-[#596780] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-100 shadow-lg rounded-xl py-2 z-50">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                <FiUser size={16} /> <span className="text-[16px] truncate tracking-[-0.02em] font-normal text-[#1A202C]">My Profile</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full">
                <FiLogOut size={16} /><span className="text-[16px] truncate tracking-[-0.02em] font-normal text-[#1A202C]"> Log Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
