import React, { useState } from "react";
import { FaBalanceScale, FaChartBar, FaFileAlt, FaMoon, FaSun, FaUpload, FaFileUpload, FaDownload, FaEye } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Chart from "react-apexcharts";

const LegalRiskAnalysisTool = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [documents, setDocuments] = useState([
    { id: 1, name: "Case Brief - Smith vs. Johnson", type: "PDF", status: "Analyzed" },
    { id: 2, name: "Evidence Documentation", type: "DOC", status: "Pending" },
    { id: 3, name: "Witness Statements", type: "PDF", status: "In Review" }
  ]);

  const [insights, setInsights] = useState([
    { id: 1, title: "Precedent Analysis", description: "Similar cases show 75% favorable outcomes", category: "Historical" },
    { id: 2, title: "Risk Factors", description: "Key liability concerns identified", category: "Analysis" },
    { id: 3, title: "Timeline Prediction", description: "Estimated case duration: 8-12 months", category: "Forecast" }
  ]);

  const caseData = [
    { id: 1, title: "Smith vs. Johnson Corp", risk: 75, type: "Corporate", jurisdiction: "Federal" },
    { id: 2, title: "Estate of Davis", risk: 45, type: "Probate", jurisdiction: "State" },
    { id: 3, title: "Green Energy Solutions", risk: 30, type: "Environmental", jurisdiction: "Federal" }
  ];

  const riskChartOptions = {
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        hollow: { size: "70%" },
        dataLabels: { show: true, name: { show: true }, value: { show: true } }
      }
    },
    labels: ["Risk Score"]
  };

  const outcomeChartOptions = {
    chart: { type: "bar" },
    plotOptions: { bar: { horizontal: false } },
    dataLabels: { enabled: false },
    xaxis: { categories: ["Win", "Settle", "Lose"] }
  };

  const judgeProfiles = [
    {
      name: "Hon. Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
      stats: { experience: "15 years", favorableRulings: "68%" }
    },
    {
      name: "Hon. James Wilson",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744",
      stats: { experience: "20 years", favorableRulings: "72%" }
    }
  ];

  // New functions for document handling
  const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newDoc = {
        id: documents.length + 1,
        name: file.name,
        type: file.name.split('.').pop().toUpperCase(),
        status: "Pending"
      };
      setDocuments([...documents, newDoc]);
    }
  };

  // Risk Analysis Function
  const analyzeRisk = (caseId) => {
    // Simulate risk analysis
    const updatedCaseData = caseData.map(item => {
      if (item.id === caseId) {
        return { ...item, risk: Math.floor(Math.random() * 100) };
      }
      return item;
    });
    // Update state would go here in a real implementation
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "risk analysis":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Detailed Risk Analysis</h2>
            {caseData.map((caseItem) => (
              <div key={caseItem.id} className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{caseItem.title}</h3>
                  <button
                    onClick={() => analyzeRisk(caseItem.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Analyze Risk
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="p-3 bg-white dark:bg-gray-600 rounded-lg">
                    <p className="text-sm font-medium">Risk Level</p>
                    <p className="text-lg">{caseItem.risk}%</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-600 rounded-lg">
                    <p className="text-sm font-medium">Type</p>
                    <p className="text-lg">{caseItem.type}</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-gray-600 rounded-lg">
                    <p className="text-sm font-medium">Jurisdiction</p>
                    <p className="text-lg">{caseItem.jurisdiction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "documents":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Document Management</h2>
              <div>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleDocumentUpload}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <FaFileUpload className="mr-2" />
                  Upload Document
                </label>
              </div>
            </div>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center">
                    <FaFileAlt className="text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-medium">{doc.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{doc.type} • {doc.status}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full">
                      <FaEye />
                    </button>
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full">
                      <FaDownload />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "insights":
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Case Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insights.map((insight) => (
                <div key={insight.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="font-medium text-lg mb-2">{insight.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{insight.description}</p>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                    {insight.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Original dashboard content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Overall Risk Score</h2>
              <Chart options={riskChartOptions} series={[65]} type="radialBar" height={300} />
            </div>
            <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Cases</h2>
              <div className="space-y-4">
                {caseData.map((caseItem) => (
                  <div key={caseItem.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <h3 className="font-medium">{caseItem.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {caseItem.type} | {caseItem.jurisdiction}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className={`px-3 py-1 rounded-full text-sm ${caseItem.risk > 70 ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" : caseItem.risk > 40 ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"}`}>
                        {caseItem.risk}% Risk
                      </div>
                      <BsThreeDotsVertical className="text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FaBalanceScale className="text-blue-600 text-2xl" />
            <h1 className="text-xl font-bold">Legal Risk Analyzer</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Search cases..."
                className="pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
              />
              <IoMdSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 mb-8">
          {["dashboard", "risk analysis", "documents", "insights"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium ${selectedTab === tab ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Content */}
        {renderTabContent()}

        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
          <FaUpload className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default LegalRiskAnalysisTool;
