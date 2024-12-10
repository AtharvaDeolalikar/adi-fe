import React from "react";

const Profile = () => {
  return (
    <section className="p-6 space-y-6 mt-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Profile Management</h1>
        <p className="text-gray-600">
          Manage your personal and professional information
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-start space-x-4 mb-6">
            <img
              src="https://placehold.co/128x128"
              alt="Profile"
              className="rounded-lg w-32 h-32"
            />
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Dr. Sarah Chen</h2>
              <p className="text-gray-600">
                Lead Researcher - Engineering Department
              </p>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all">
                  Edit Profile
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">
                  View Public Profile
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                value="Dr. Sarah Chen"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                value="Lead Researcher"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                value="sarah.chen@institution.edu"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                value="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>Engineering</option>
                <option>Science</option>
                <option>Medicine</option>
                <option>Technology</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                <option>Lead Researcher</option>
                <option>Senior Researcher</option>
                <option>Research Associate</option>
                <option>Faculty Member</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                rows="4"
                defaultValue="Experienced researcher specializing in AI and machine learning applications in education. Leading multiple research projects focused on improving learning outcomes through technology integration."
              />
            </div>
          </div>
        </div>

        {/* Stats and Achievements */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium mb-4">Research Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Publications</span>
                <span className="font-bold">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Citations</span>
                <span className="font-bold">1,284</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">h-index</span>
                <span className="font-bold">18</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active Projects</span>
                <span className="font-bold">5</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium mb-4">Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-trophy text-yellow-500"></i>
                <span className="text-sm">
                  Innovation Excellence Award 2023
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-medal text-blue-500"></i>
                <span className="text-sm">
                  Best Research Paper - AI Conference
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-award text-green-500"></i>
                <span className="text-sm">Research Grant Achievement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
