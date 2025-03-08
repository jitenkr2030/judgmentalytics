import React, { useState } from "react";
import { FaFileAlt, FaClipboardCheck, FaSearch, FaUpload, FaHistory, FaDownload, FaMoon, FaSun, FaComments } from "react-icons/fa";
import { BsCheckCircleFill, BsExclamationTriangle } from "react-icons/bs";

const DocumentAutomation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("landing");
  const [documentProgress, setDocumentProgress] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);

  const templateCategories = [
    { id: 1, name: "Contracts", count: 25 },
    { id: 2, name: "NDAs", count: 15 },
    { id: 3, name: "Legal Agreements", count: 30 },
  ];

  const complianceIssues = [
    { id: 1, severity: "critical", message: "Missing signature block", section: "Section 8.2" },
    { id: 2, severity: "minor", message: "Date format inconsistency", section: "Section 3.1" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f" alt="Logo" className="h-8 w-8 rounded" />
            <h1 className="text-xl font-bold">DocAutomation</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-24 pb-12">
        {activeTab === "landing" && (
          <div className="text-center py-16">
            <h2 className="text-4xl font-bold mb-6">Automate Your Legal Documents</h2>
            <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">
              Streamline your document creation and compliance checking process
            </p>
            <div className="flex justify-center space-x-6">
              <button
                onClick={() => setActiveTab("draft")}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                <FaFileAlt className="inline mr-2" /> Draft a New Document
              </button>
              <button
                onClick={() => setActiveTab("compliance")}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
              >
                <FaClipboardCheck className="inline mr-2" /> Check Compliance
              </button>
            </div>
          </div>
        )}

        {activeTab === "draft" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${documentProgress}%` }}
                  ></div>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <label className="block mb-2">Document Type</label>
                  <select className="w-full p-3 border rounded dark:bg-gray-700">
                    {templateCategories.map((category) => (
                      <option key={category.id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block mb-2">Party A Name</label>
                  <input
                    type="text"
                    placeholder="Enter Party A Name"
                    className="w-full p-3 border rounded dark:bg-gray-700"
                  />
                </div>
              </form>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Document Preview</h3>
              <div className="border-2 border-dashed p-4 rounded min-h-[400px]">
                Preview will appear here
              </div>
            </div>
          </div>
        )}

        {activeTab === "compliance" && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-8">
              <div
                className="border-2 border-dashed p-8 rounded-lg text-center cursor-pointer"
                onClick={() => setUploadProgress(100)}
              >
                <FaUpload className="text-4xl mx-auto mb-4 text-gray-400" />
                <p>Drag and drop your document or click to upload</p>
              </div>
              {uploadProgress > 0 && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              {complianceIssues.map((issue) => (
                <div
                  key={issue.id}
                  className={`p-4 rounded-lg flex items-start space-x-4 ${
                    issue.severity === "critical" ? "bg-red-100" : "bg-yellow-100"
                  }`}
                >
                  {issue.severity === "critical" ? (
                    <BsExclamationTriangle className="text-red-600 text-xl" />
                  ) : (
                    <BsCheckCircleFill className="text-yellow-600 text-xl" />
                  )}
                  <div>
                    <p className="font-semibold">{issue.message}</p>
                    <p className="text-sm text-gray-600">{issue.section}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
          <FaComments className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default DocumentAutomation;