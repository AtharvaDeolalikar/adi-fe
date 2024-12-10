import React from "react";

const Collaboration = () => {
  return (
    <section className="p-6 space-y-6 mt-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Collaboration Hub</h1>
        <p className="text-gray-600">
          Connect, collaborate, and innovate with fellow researchers
        </p>
      </div>

      {/* Actions Bar */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-wrap gap-4">
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all flex items-center">
          <i className="fas fa-plus mr-2"></i>
          New Project
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center">
          <i className="fas fa-users mr-2"></i>
          Find Collaborators
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all flex items-center">
          <i className="fas fa-comments mr-2"></i>
          Discussion Forums
        </button>
      </div>

      {/* Active Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Cards */}
      </div>

      {/* Recent Activity & Discussions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
          <div className="space-y-4">{/* Add activity items */}</div>
        </div>

        {/* Upcoming Meetings */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium mb-4">Upcoming Meetings</h3>
          <div className="space-y-4">{/* Add meeting items */}</div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
