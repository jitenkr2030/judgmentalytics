import React, { useState, useEffect } from "react";
import { FaUpload, FaSearch, FaEdit, FaExclamationTriangle } from "react-icons/fa";
import { BsGraphUp, BsFileText, BsFileEarmarkText } from "react-icons/bs";

const DocumentComparisonModule = () => {
  const [documents, setDocuments] = useState({
    original: null,
    comparison: null
  });
  const [activeTab, setActiveTab] = useState("comparison");
  const [searchTerm, setSearchTerm] = useState("");
  const [insights, setInsights] = useState([]);
  const [comparisonResult, setComparisonResult] = useState("");
  const [report, setReport] = useState("");
  const [improvements, setImprovements] = useState([]);

  const dummyInsights = [
    {
      type: "critical",
      message: "Weak argument structure in paragraph 3",
      severity: "high"
    },
    {
      type: "improvement",
      message: "Consider strengthening terminology in section 2",
      severity: "medium"
    },
    {
      type: "match",
      message: "Strong precedent match in conclusion",
      severity: "low"
    }
  ];

  const handleDrop = (e, type) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length) {
      setDocuments(prev => ({
        ...prev,
        [type]: files[0]
      }));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setInsights(dummyInsights);
  }, [documents]);

  const renderSeverityIcon = (severity) => {
    const colors = {
      high: "text-red-500",
      medium: "text-yellow-500",
      low: "text-green-500"
    };
    return (
      <FaExclamationTriangle className={`${colors[severity]} w-5 h-5`} />
    );
  };

  // New function for comparison view
  const handleComparisonView = () => {
    setActiveTab("comparison");
    if (documents.original) {
      setComparisonResult("Comparing documents... Here are the differences:\n1. Section 1 shows 85% similarity\n2. Section 2 has major differences\n3. Section 3 is completely different");
    }
  };

  // New function for insights view
  const handleInsightsView = () => {
    setActiveTab("insights");
    setInsights([
      ...dummyInsights,
      {
        type: "analysis",
        message: "New patterns identified in document structure",
        severity: "medium"
      }
    ]);
  };

  // New function for generating report
  const handleGenerateReport = () => {
    setReport("Detailed Analysis Report:\n\n1. Document Overview\n2. Similarity Metrics\n3. Key Differences\n4. Recommendations");
    alert("Report generated successfully!");
  };

  // New function for suggesting improvements
  const handleSuggestImprovements = () => {
    setImprovements([
      "1. Strengthen the introduction paragraph",
      "2. Add more supporting evidence in section 2",
      "3. Improve conclusion clarity",
      "4. Consider adding more citations"
    ]);
    alert("Improvements suggested! Check the comparison view.");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Document Comparison Module</h1>
          <div className="mt-4 flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search within documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Document Upload Section */}
          <div className="lg:w-1/2 p-6 border-r border-gray-200">
            <div
              className="h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors"
              onDrop={(e) => handleDrop(e, "original")}
              onDragOver={handleDragOver}
            >
              <div className="text-center">
                <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
                <p className="text-gray-600">Drag and drop your document here</p>
                <p className="text-sm text-gray-400 mt-2">Supported formats: PDF, DOCX, TXT</p>
              </div>
            </div>

            {/* Document Preview */}
            {documents.original && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <BsFileText className="text-2xl text-blue-500 mb-2" />
                <p className="font-medium">{documents.original.name}</p>
              </div>
            )}
          </div>

          {/* Analysis Section */}
          <div className="lg:w-1/2 p-6">
            <div className="flex space-x-4 mb-6">
              <button
                className={`px-4 py-2 rounded-lg ${activeTab === "comparison" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}
                onClick={handleComparisonView}
              >
                Comparison View
              </button>
              <button
                className={`px-4 py-2 rounded-lg ${activeTab === "insights" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"}`}
                onClick={handleInsightsView}
              >
                Insights
              </button>
            </div>

            {activeTab === "comparison" ? (
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium mb-2">Document Comparison</h3>
                  <div className="h-96 bg-white border border-gray-200 rounded-lg p-4 overflow-auto">
                    {documents.original ? (
                      <div className="space-y-2">
                        <p className="text-gray-600">{comparisonResult || "Analyzing documents..."}</p>
                        {improvements.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-medium text-blue-500">Suggested Improvements:</h4>
                            {improvements.map((improvement, index) => (
                              <p key={index} className="text-gray-600 mt-2">{improvement}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-gray-400 text-center">Upload a document to begin comparison</p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg flex items-start space-x-3">
                    {renderSeverityIcon(insight.severity)}
                    <div>
                      <p className="font-medium">{insight.message}</p>
                      <p className="text-sm text-gray-500 mt-1">Click to view details</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Panel */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                onClick={handleGenerateReport}
              >
                <BsGraphUp className="mr-2" />
                Generate Report
              </button>
              <button 
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center"
                onClick={handleSuggestImprovements}
              >
                <FaEdit className="mr-2" />
                Suggest Improvements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentComparisonModule;