import React, { useState, useEffect } from "react";
import { FiUpload, FiSearch, FiMessageSquare, FiUsers, FiFile, FiBarChart2, FiActivity, FiBell } from "react-icons/fi";
import { AiOutlineComment, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const CollaborativeWorkspace = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [notifications, setNotifications] = useState([]);
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const dummyMetrics = {
    tasksCompleted: 45,
    tasksOutstanding: 23,
    activeUsers: 12,
    documentsShared: 89
  };

  const dummyActivities = [
    { id: 1, user: "John Doe", action: "uploaded", item: "Case Document A", timestamp: "2 hours ago" },
    { id: 2, user: "Jane Smith", action: "commented on", item: "Legal Brief B", timestamp: "4 hours ago" },
    { id: 3, user: "Mike Johnson", action: "modified", item: "Contract C", timestamp: "1 day ago" }
  ];

  const dummyPredictions = [
    {
      id: 1,
      case: "Smith vs. Johnson",
      prediction: "87% likelihood of settlement",
      explanation: "Based on historical case data and current negotiations"
    },
    {
      id: 2,
      case: "Corporate Merger A",
      prediction: "92% success rate",
      explanation: "Analysis of similar merger cases and market conditions"
    }
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload logic here
  };

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <MetricCard title="Tasks Completed" value={dummyMetrics.tasksCompleted} icon={<FiBarChart2 />} />
      <MetricCard title="Tasks Outstanding" value={dummyMetrics.tasksOutstanding} icon={<FiActivity />} />
      <MetricCard title="Active Users" value={dummyMetrics.activeUsers} icon={<FiUsers />} />
      <MetricCard title="Documents Shared" value={dummyMetrics.documentsShared} icon={<FiFile />} />
    </div>
  );

  const renderFileRepository = () => (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center ${
        dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <FiUpload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
      <p className="text-gray-600">Drag and drop files here or click to upload</p>
    </div>
  );

  const renderPredictions = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {dummyPredictions.map((prediction) => (
        <div key={prediction.id} className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-2">{prediction.case}</h3>
          <p className="text-blue-600 font-medium">{prediction.prediction}</p>
          <p className="text-gray-600 text-sm mt-2">{prediction.explanation}</p>
          <div className="mt-4 flex space-x-4">
            <button className="flex items-center text-gray-600 hover:text-blue-600">
              <AiOutlineLike className="mr-1" /> Helpful
            </button>
            <button className="flex items-center text-gray-600 hover:text-red-600">
              <AiOutlineDislike className="mr-1" /> Not Helpful
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Collaborative Workspace</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FiBell className="w-6 h-6" />
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </header>

        <nav className="flex space-x-4 mb-8">
          {["overview", "files", "chat", "predictions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        <main className="mb-8">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "files" && renderFileRepository()}
          {activeTab === "predictions" && renderPredictions()}
        </main>

        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {dummyActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  {activity.user.charAt(0)}
                </div>
                <div>
                  <span className="font-medium">{activity.user}</span>
                  <span className="text-gray-600"> {activity.action} </span>
                  <span className="font-medium">{activity.item}</span>
                  <span className="text-gray-500 ml-2">{activity.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-gray-600 font-medium">{title}</h3>
      <div className="text-blue-500">{icon}</div>
    </div>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default CollaborativeWorkspace;