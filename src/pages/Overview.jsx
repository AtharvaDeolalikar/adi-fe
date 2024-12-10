import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

const Overview = () => {
  useEffect(() => {
    // Innovation Score Chart
    const innovationScoreOptions = {
      chart: {
        type: "line",
        height: 256,
        toolbar: { show: false },
        sparkline: { enabled: true },
      },
      series: [
        {
          name: "Score",
          data: [65, 72, 78, 75, 82, 87],
        },
      ],
      stroke: {
        curve: "smooth",
        width: 3,
      },
      colors: ["#0ea5e9"],
      markers: {
        size: 4,
      },
    };

    // Department Performance Chart
    const departmentPerformanceOptions = {
      chart: {
        type: "bar",
        height: 320,
        toolbar: { show: false },
      },
      series: [
        {
          name: "Projects",
          data: [44, 55, 57, 56, 61, 58],
        },
      ],
      xaxis: {
        categories: [
          "Engineering",
          "Science",
          "Medicine",
          "Business",
          "Arts",
          "Technology",
        ],
      },
      colors: ["#0ea5e9"],
    };

    new ApexCharts(
      document.querySelector("#innovation-trend-chart"),
      innovationScoreOptions
    ).render();
    new ApexCharts(
      document.querySelector("#department-performance-chart"),
      departmentPerformanceOptions
    ).render();
  }, []);

  return (
    <section className="p-6 space-y-6 mt-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Innovation Dashboard</h1>
        <p className="text-gray-600">
          Welcome back, Admin! Here's your innovation metrics overview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">
              Research Papers
            </h3>
            <i className="fas fa-file-alt text-primary-500"></i>
          </div>
          <p className="text-2xl font-bold">247</p>
          <p className="text-sm text-green-600 mt-2">
            <i className="fas fa-arrow-up mr-1"></i>12% increase
          </p>
        </div>

        {/* Add other stat cards similarly */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Innovation Trends</h3>
          <div id="innovation-trend-chart" className="h-80"></div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium mb-4">Department Performance</h3>
          <div id="department-performance-chart" className="h-80"></div>
        </div>
      </div>

      {/* Recent Activity section */}
      <div className="bg-white rounded-lg border border-gray-200 mt-6">
        {/* Add recent activity content */}
      </div>
    </section>
  );
};

export default Overview;
