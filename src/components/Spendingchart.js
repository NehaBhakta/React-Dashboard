import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const normalColor = "#40A198";
  const hoverColor = "#1C1E23";

  // Maintain colors in state
  const [colors, setColors] = useState(Array(12).fill(normalColor));

  const series = [
    { 
      name: "Net Profit", 
      data: [44000, 55000, 77000, 56000, 61000, 58000, 23000, 60000, 66000, 80000, 6000, 30000],
      color: '#40A198'
    }
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false  // hides the download/export buttons
      },
      events: {
        dataPointMouseEnter: function(event, chartContext, config) {
          const newColors = [...colors];
          newColors[config.dataPointIndex] = hoverColor; // hover color
          setColors(newColors);
        },
        dataPointMouseLeave: function(event, chartContext, config) {
          const newColors = [...colors];
          newColors[config.dataPointIndex] = normalColor; // normal color
          setColors(newColors);
        }
      }
    },
    title: {
        text: 'Spending Statistics',   // title text
        align: 'left',                // 'left', 'center', 'right'
        style: {
        fontSize: '16px',           // title font size
        color: '#1A202C',           // title color
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '600',
        margin: 30, 
        }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadius: 5,
        borderRadiusApplication: "end"
      }
    },
    fill: { colors: ["#40A198"] },
    dataLabels: { enabled: false },
    xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      labels: {
      style: {
      colors: '#14171F',    // change text color
      fontSize: '12px',     // change font size
      fontFamily: 'Plus Jakarta Sans', // custom font
      fontWeight: '500'     // optional: font weight
    }
  }
     },
    yaxis: {
        min: 500,     // start value
        max: 80000,   // end value
        labels: {
            formatter: (val) => `${Math.round(val / 1000)}k`,  // convert 1000 → 1k
            style: {
            colors: '#14171F',       // label color
            fontSize: '12px',        // label font size
            fontFamily: 'Plus Jakarta Sans', // optional: font family
            fontWeight: '500'        // optional: font weight
            }
        }
    },
    tooltip: {
        y: {
        formatter: (val) => `$${Math.round(val / 1000)}k` // tooltip formatting
        }
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <ReactApexChart 
        options={{ ...options, fill: { colors } }} 
        series={series} 
        type="bar" 
        height={350} 
      />
    </div>
  );
};

export default ApexChart;
