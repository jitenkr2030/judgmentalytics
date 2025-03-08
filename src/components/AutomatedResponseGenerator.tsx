import React, { useState } from "react";
import { FiSearch, FiEdit2, FiClock, FiSun, FiMoon, FiCheck } from "react-icons/fi";
import { MdHistory, MdDragIndicator } from "react-icons/md";

const AutomatedResponseGenerator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [caseDetails, setCaseDetails] = useState({
    caseNumber: "",
    clientName: "",
    description: "",
    date: ""
  });
  const [customResponse, setCustomResponse] = useState("");
  const [selectedTone, setSelectedTone] = useState("professional");

  const legalTemplates = [
    {
      id: 1,
      title: "Breach of Contract Response",
      jurisdiction: "Federal",
      category: "Contract",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
    },
    {
      id: 2,
      title: "Liability Dispute Notice",
      jurisdiction: "State",
      category: "Liability",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
    },
    {
      id: 3,
      title: "Property Rights Notice",
      jurisdiction: "Local",
      category: "Property",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
    }
  ];

  const steps = [
    "Select Template",
    "Case Details",
    "Customize Response",
    "Review & Generate"
  ];

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleCaseDetailsChange = (e) => {
    setCaseDetails({
      ...caseDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalTemplates.map((template) => (
              <div
                key={template.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedTemplate(template);
                  handleNextStep();
                }}
              >
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{template.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{template.jurisdiction}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Case Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Number</label>
                <input
                  type="text"
                  name="caseNumber"
                  value={caseDetails.caseNumber}
                  onChange={handleCaseDetailsChange}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Client Name</label>
                <input
                  type="text"
                  name="clientName"
                  value={caseDetails.clientName}
                  onChange={handleCaseDetailsChange}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Case Description</label>
                <textarea
                  name="description"
                  value={caseDetails.description}
                  onChange={handleCaseDetailsChange}
                  className="w-full p-2 border rounded-md h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={caseDetails.date}
                  onChange={handleCaseDetailsChange}
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Customize Response</h2>
            <div className="flex gap-6">
              <div className="flex-1">
                <textarea
                  value={customResponse}
                  onChange={(e) => setCustomResponse(e.target.value)}
                  className="w-full h-64 p-4 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white resize-none"
                  placeholder="Enter your response here..."
                ></textarea>
              </div>
              <div className="w-64 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Tone Selection</h3>
                <div className="space-y-4">
                  {["professional", "empathetic", "assertive"].map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`w-full px-4 py-2 rounded-lg capitalize ${selectedTone === tone ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-gray-200"}`}
                    >
                      {tone} Tone
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Review & Generate</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Case Details</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p><span className="font-medium">Case Number:</span> {caseDetails.caseNumber}</p>
                  <p><span className="font-medium">Client Name:</span> {caseDetails.clientName}</p>
                  <p><span className="font-medium">Date:</span> {caseDetails.date}</p>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Generated Response</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p>{customResponse}</p>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                <FiCheck /> Generate Final Document
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <nav className="bg-white dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Legal Response Generator</h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? <FiSun className="text-white" /> : <FiMoon />}
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Step Progress */}
        <div className="mb-8">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col items-center w-1/4 ${index + 1 === currentStep ? "text-blue-600" : "text-gray-500"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index + 1 === currentStep ? "bg-blue-600 text-white" : "bg-gray-200"}`}>
                  {index + 1}
                </div>
                <span className="mt-2 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {currentStep > 1 && (
            <button
              onClick={handlePrevStep}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
            >
              Previous
            </button>
          )}
          {currentStep < 4 && (
            <button
              onClick={handleNextStep}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto"
            >
              Next
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default AutomatedResponseGenerator;