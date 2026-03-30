import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardContent from "../components/DashboardContent";



const Dashboard = () => {
  return (
    
    <div className="flex">
      <Sidebar />
      <div className="w-full overflow-y-auto max-h-[calc(100vh-32px)] scrollbar">
        <Header />
        <DashboardContent />
      </div>
      
    </div>
  );
};

export default Dashboard;
