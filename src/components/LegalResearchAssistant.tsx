import React, { useState } from "react";
import { FaSearch, FaBookmark, FaDownload, FaChartBar, FaBalanceScale, FaGavel, FaBook, FaCog } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const LegalResearchAssistant = () => {
  const [activeTab, setActiveTab] = useState("landing");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const dummyCases = [
    {
      id: 1,
      name: "Smith v. Johnson",
      citation: "123 F.3d 456 (2023)",
      summary: "Landmark case establishing new precedent in contract law",
      jurisdiction: "Federal",
      area: "Contract Law",
      date: "2023-05-15"
    },
    {
      id: 2,
      name: "State v. Williams",
      citation: "789 N.E.2d 012 (2023)",
      summary: "Criminal procedure regarding evidence admissibility",
      jurisdiction: "State",
      area: "Criminal Law",
      date: "2023-06-20"
    }
  ];

  const dummyStatutes = [
    {
      id: 1,
      title: "Commercial Code Section 2-201",
      summary: "Statute of Frauds requirements for commercial transactions",
      impact: "Affects contract enforceability in business dealings"
    },
    {
      id: 2,
      title: "Criminal Procedure Act Section 8.01",
      summary: "Requirements for search warrant execution",
      impact: "Defines law enforcement procedures"
    }
  ];

  const LandingPage = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div
        onClick={() => setActiveTab("caseLaw")}
        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <FaGavel className="text-6xl text-blue-600 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Case Law Search</h2>
        <p className="text-gray-600">Search and analyze legal cases across jurisdictions</p>
      </div>
      <div
        onClick={() => setActiveTab("statute")}
        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      >
        <IoDocumentText className="text-6xl text-blue-600 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Statute Analyzer</h2>
        <p className="text-gray-600">Analyze statutes and regulations with AI assistance</p>
      </div>
    </div>
  );

  const CaseLawSearch = () => (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search cases..."
            className="flex-1 p-3 border rounded-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            <FaSearch className="inline mr-2" /> Search
          </button>
        </div>
        <div className="flex gap-4 mb-4">
          <select className="p-2 border rounded-lg">
            <option>All Jurisdictions</option>
            <option>Federal</option>
            <option>State</option>
          </select>
          <select className="p-2 border rounded-lg">
            <option>All Case Types</option>
            <option>Civil</option>
            <option>Criminal</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dummyCases.map((case_) => (
          <div key={case_.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold mb-2">{case_.name}</h3>
              <FaBookmark className="text-blue-600 cursor-pointer" />
            </div>
            <p className="text-gray-600 mb-2">{case_.citation}</p>
            <p className="mb-4">{case_.summary}</p>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {case_.jurisdiction}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {case_.area}
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                {case_.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const StatuteAnalyzer = () => (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold mb-4">Statute Dashboard</h2>
            <div className="grid gap-4">
              {dummyStatutes.map((statute) => (
                <div key={statute.id} className="border p-4 rounded-lg">
                  <h3 className="font-bold mb-2">{statute.title}</h3>
                  <p className="text-gray-600 mb-2">{statute.summary}</p>
                  <p className="text-sm text-blue-600">{statute.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Interactive Q&A</h3>
            <textarea
              className="w-full p-3 border rounded-lg mb-4"
              placeholder="Ask a legal question..."
              rows="4"
            ></textarea>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Get Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <FaBalanceScale className="text-3xl text-blue-600" />
              <h1 className="text-2xl font-bold">Legal Research Assistant</h1>
            </div>
            <div className="flex space-x-4">
              <FaDownload className="text-2xl text-gray-600 cursor-pointer" />
              <FaCog className="text-2xl text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b">
        <div className="container mx-auto px-6 py-3">
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab("landing")}
              className={`py-2 px-4 ${
                activeTab === "landing" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab("caseLaw")}
              className={`py-2 px-4 ${
                activeTab === "caseLaw" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
              }`}
            >
              Case Law Search
            </button>
            <button
              onClick={() => setActiveTab("statute")}
              className={`py-2 px-4 ${
                activeTab === "statute" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
              }`}
            >
              Statute Analyzer
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto py-8">
        {activeTab === "landing" && <LandingPage />}
        {activeTab === "caseLaw" && <CaseLawSearch />}
        {activeTab === "statute" && <StatuteAnalyzer />}
      </main>
    </div>
  );
};

export default LegalResearchAssistant;