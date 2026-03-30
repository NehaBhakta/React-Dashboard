import React from "react";
// import GroupedStackedColumnChart from "./Spendingchart";
import ApexChart from "./Spendingchart";
import Reportbox from "./Report";
import ReportDatalist from "./ReportDatalist";
import BalanceDataList from "./BalanceData";
import DonutChart from "./Spenddeatailchart";
import TransactionsTable from "./Tablebox";

const DashboardContent = () => {
  return (

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 ml-28 mr-4 sm:ml-8 sm:mr-8">
    {/* Left big card */}
    <div className="rounded-lg md:col-span-2">
      {/* Inner Box - Full Width */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
           <ApexChart/>
        </div>
      </div>

      {/* Inner Grid - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white rounded-[10px]">
        {ReportDatalist.map((list) => (
          <Reportbox key={list.id} ListData={list} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <TransactionsTable/>
      </div>
      
    </div>

    {/* Right small card */}
    <div className="md:col-span-1">

      {/* Inner Box 1 */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-[#FFFFFF] p-4 rounded-lg">
        {BalanceDataList.map((list) => (
          <Reportbox key={list.id} ListData={list} />
        ))}
        </div>
      </div>

      {/* Inner Box 2 */}
      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="bg-[#F9FAFB]rounded-lg ">
          <DonutChart/>
        </div>
      </div>
    </div>
  </div>






  );
};

export default DashboardContent;
