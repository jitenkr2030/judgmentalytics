import React, { useState, useRef } from "react";
import { FaUpload, FaDownload, FaShare, FaLock, FaCog, FaLanguage, FaExpandAlt } from "react-icons/fa";

const LegalDocumentTool = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [summary, setSummary] = useState(null);
  const [translation, setTranslation] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("Spanish");
  const [summaryLength, setSummaryLength] = useState("medium");
  const fileInputRef = useRef(null);

  const dummySummary = {
    headline: "Employment Contract Summary",
    brief: "Standard employment agreement outlining terms and conditions",
    sections: [
      {
        title: "Contract Clauses",
        content: "Details regarding compensation, benefits, and termination policies",
        color: "bg-blue-100"
      },
      {
        title: "Legal Precedents",
        content: "References to relevant case law and statutory provisions",
        color: "bg-green-100"
      },
      {
        title: "Court Rulings",
        content: "Applicable judicial interpretations and decisions",
        color: "bg-purple-100"
      }
    ],
    wordCount: { original: 5000, summarized: 1200 }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    handleFileUpload(droppedFile);
  };

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSummary(dummySummary);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleSummarize = () => {
    setSummary(dummySummary);
  };

  const handleTranslate = () => {
    setTranslation({
      original: dummySummary.brief,
      translated: "Acuerdo estándar de empleo que describe términos y condiciones",
      accuracy: 95
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
      {/* Upload Section */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-4 border-dashed border-gray-200 rounded-lg p-8 text-center mb-8"
      >
        <FaUpload className="mx-auto text-4xl text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Upload Legal Document</h2>
        <p className="text-gray-600 mb-4">Drag and drop your document here or</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => handleFileUpload(e.target.files[0])}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current.click()}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Choose File
        </button>

        {uploadProgress > 0 && (
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{uploadProgress}% uploaded</p>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <FaLanguage className="text-gray-600" />
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <FaCog className="text-gray-600" />
          <select
            value={summaryLength}
            onChange={(e) => setSummaryLength(e.target.value)}
            className="border rounded-lg px-4 py-2"
          >
            <option value="short">Short Summary</option>
            <option value="medium">Medium Summary</option>
            <option value="long">Long Summary</option>
          </select>
        </div>

        <button
          onClick={handleSummarize}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
        >
          Summarize Now
        </button>

        <button
          onClick={handleTranslate}
          className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 flex items-center gap-2"
        >
          Translate Document
        </button>
      </div>

      {/* Summary Section */}
      {summary && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold mb-4">{summary.headline}</h3>
          <p className="text-gray-700 mb-6">{summary.brief}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {summary.sections.map((section, index) => (
              <div
                key={index}
                className={`${section.color} rounded-lg p-4 transition-all hover:shadow-md`}
              >
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <p className="text-gray-700">{section.content}</p>
                <button className="text-blue-500 mt-2 flex items-center gap-1">
                  <FaExpandAlt /> Read More
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">
                Original Length: {summary.wordCount.original} words
              </p>
              <p className="text-sm text-gray-600">
                Summarized Length: {summary.wordCount.summarized} words
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                <FaDownload /> Download
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
                <FaShare /> Share
              </button>
              <FaLock className="text-green-500" title="Secure & Encrypted" />
            </div>
          </div>
        </div>
      )}

      {/* Translation Section */}
      {translation && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Translation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Original Text</h4>
              <p>{translation.original}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Translated Text</h4>
              <p>{translation.translated}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-gray-600">AI Accuracy Score:</span>
                <span className="text-sm font-semibold text-green-500">
                  {translation.accuracy}%
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalDocumentTool;