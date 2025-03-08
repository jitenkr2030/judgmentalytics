import React, { useState } from "react";
import { FaGavel, FaExclamationTriangle, FaFileAlt, FaSearch, FaFilter, FaDownload } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const ComplianceDetectionTool = () => {
  const [activeTab, setActiveTab] = useState("relationships");
  const [showModal, setShowModal] = useState(false);
  const [filterType, setFilterType] = useState("all");

  const dummyRelationships = [
    {
      id: 1,
      name: "John Smith",
      role: "Client",
      connections: ["Sarah Johnson", "Michael Brown"],
      riskLevel: "high"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Lawyer",
      connections: ["John Smith"],
      riskLevel: "moderate"
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Expert Witness",
      connections: ["John Smith"],
      riskLevel: "low"
    }
  ];

  const RelationshipMap = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Relationship Network</h3>
      <div className="flex flex-wrap gap-4">
        {dummyRelationships.map((person) => (
          <div
            key={person.id}
            className={`p-4 rounded-lg ${person.riskLevel === "high" ? "bg-red-100" : person.riskLevel === "moderate" ? "bg-yellow-100" : "bg-green-100"} relative`}
          >
            <BsFillPersonFill className="text-2xl mb-2" />
            <h4 className="font-semibold">{person.name}</h4>
            <p className="text-sm text-gray-600">{person.role}</p>
            <div className="mt-2 text-sm">
              <p>Connections:</p>
              {person.connections.map((connection, idx) => (
                <span key={idx} className="inline-block bg-white px-2 py-1 rounded mr-2 mt-1">
                  {connection}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ConflictAlerts = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-bold mb-4">Active Alerts</h3>
      <div className="space-y-4">
        {dummyRelationships
          .filter((person) => person.riskLevel === "high" || person.riskLevel === "moderate")
          .map((person) => (
            <div
              key={person.id}
              className={`p-4 rounded-lg ${person.riskLevel === "high" ? "bg-red-100" : "bg-yellow-100"} flex items-center justify-between`}
            >
              <div>
                <h4 className="font-semibold">{person.name}</h4>
                <p className="text-sm text-gray-600">Potential conflict detected</p>
              </div>
              <FaExclamationTriangle className={`text-2xl ${person.riskLevel === "high" ? "text-red-500" : "text-yellow-500"}`} />
            </div>
          ))}
      </div>
    </div>
  );

  const FilterPanel = () => (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Filters</h3>
        <FaFilter className="text-gray-500" />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setFilterType("all")}
          className={`px-4 py-2 rounded ${filterType === "all" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilterType("family")}
          className={`px-4 py-2 rounded ${filterType === "family" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
        >
          Family
        </button>
        <button
          onClick={() => setFilterType("business")}
          className={`px-4 py-2 rounded ${filterType === "business" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
        >
          Business
        </button>
        <button
          onClick={() => setFilterType("political")}
          className={`px-4 py-2 rounded ${filterType === "political" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
        >
          Political
        </button>
      </div>
    </div>
  );

  const AnalysisModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${showModal ? "" : "hidden"}`}>
      <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Case History Analysis</h3>
          <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-semibold">Similar Case Patterns</h4>
            <p className="text-sm text-gray-600 mt-2">
              AI analysis has identified potential conflicts based on historical case data...
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h4 className="font-semibold">Recommended Actions</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>Review relationship between Party A and Party B</li>
              <li>Document all communications with involved parties</li>
              <li>Consider external counsel review</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FaGavel className="text-2xl text-blue-500" />
            <h1 className="text-2xl font-bold">Compliance Detection Tool</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowModal(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Analysis
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              <FaDownload className="inline-block mr-2" />
              Generate Report
            </button>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FilterPanel />
          <RelationshipMap />
        </div>
        <div className="lg:col-span-1">
          <ConflictAlerts />
        </div>
      </div>

      <AnalysisModal />
    </div>
  );
};

export default ComplianceDetectionTool;