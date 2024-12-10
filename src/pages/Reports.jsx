import React from "react";

const Reports = () => {
  return (
    <section className="p-6 space-y-6 mt-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Reports Generator</h1>
        <p className="text-gray-600">
          Generate comprehensive reports and analysis documents
        </p>
      </div>

      {/* Report Builder */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-6">
          {/* Report Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
              <option>Innovation Performance Report</option>
              <option>Research Impact Analysis</option>
              <option>Department Progress Report</option>
              <option>Grant Success Analysis</option>
              <option>Custom Report</option>
            </select>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Add date inputs */}
          </div>

          {/* Sections Selection */}
          <div>{/* Add section checkboxes */}</div>

          {/* Format Options */}
          <div>{/* Add format buttons */}</div>

          {/* Generate Button */}
          <div className="flex justify-end space-x-4">
            <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              Save Template
            </button>
            <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
              Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-medium mb-4">Recent Reports</h3>
        <div className="space-y-4">{/* Add recent reports list */}</div>
      </div>
    </section>
  );
};

export default Reports;
