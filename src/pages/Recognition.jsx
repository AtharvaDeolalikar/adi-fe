import React from "react";

const Recognition = () => {
  return (
    <section className="p-6 space-y-6 mt-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Recognition Board</h1>
        <p className="text-gray-600">
          Celebrating innovation excellence and outstanding achievements
        </p>
      </div>

      {/* Featured Innovators */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium mb-6">
            Featured Innovators of the Month
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Innovator Card 1 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/64x64"
                  alt="Dr. Sarah Chen"
                  className="rounded-full w-16 h-16"
                />
                <div className="ml-4">
                  <h3 className="font-medium">Dr. Sarah Chen</h3>
                  <p className="text-sm text-gray-600">
                    Engineering Department
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <i className="fas fa-trophy text-yellow-500 w-5"></i>
                  <span className="ml-2 text-sm">3 Patents Filed</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-star text-yellow-500 w-5"></i>
                  <span className="ml-2 text-sm">$1.2M in Grants</span>
                </div>
              </div>
            </div>

            {/* Add other innovator cards */}
          </div>
        </div>
      </div>

      {/* Department Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Departments */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium mb-4">
            Top Performing Departments
          </h3>
          <div className="space-y-4">
            {/* Add department performance items */}
          </div>
        </div>

        {/* Recent Awards */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium mb-4">Recent Awards</h3>
          <div className="space-y-4">{/* Add recent awards items */}</div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
