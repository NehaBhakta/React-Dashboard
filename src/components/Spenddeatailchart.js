import React from "react";
import Chart from "react-apexcharts";
import Downloadicon from "../assets/icons/Downloadicon";

const DonutChart = () => {
  const series = [44, 55, 41, 17, 15];
  const labels = ["Apples", "Bananas", "Oranges", "Mangoes", "Grapes"];

  const options = {
    chart: {
      type: "donut",
    },
    title: {
      
      align: "left",
      style: {
        fontSize: "16px",
        color: "#1A202C",
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 600,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      formatter: function (val, opts) {
        const value = opts.w.globals.series[opts.seriesIndex];
        return `${val} - $${value}`;
      },
      labels: {
        colors: "#1A202C",
      },
      fontSize: "14px",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#40A198", "#FFB547", "#7FB519", "#FF4423", "#3B82F6"],
    responsive: [
      {
        breakpoint: 768,
        options: {
          legend: {
            position: "bottom",
            horizontalAlign: "center",
          },
        },
      },
    ],
    labels: labels,
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full">
      {/* Title + Icon Row */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-[#1A202C]">
          Spend by Category
        </h2>
        <button className="p-2  transition">
          <Downloadicon size={22} color="#1A202C" />
        </button>
      </div>

      {/* Chart */}
      <div className="relative">
        <Chart options={options} series={series} type="donut" height="350" />
      </div>

      {/* Custom CSS to make legend vertical */}
      <style jsx>{`
        .apexcharts-legend.apexcharts-align-center.apx-legend-position-right {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 6px !important;
        }
      `}</style>
    </div>
  );
};

export default DonutChart;
