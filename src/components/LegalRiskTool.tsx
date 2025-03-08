import React, { useState } from "react";
import { FaStar, FaUser, FaChartBar, FaSearch, FaAward, FaPhone, FaEnvelope } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LegalRiskTool = () => {
  const [activeTab, setActiveTab] = useState("experts");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedExpert, setSelectedExpert] = useState(null);

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialization: "Medical Malpractice Expert",
      rating: 4.8,
      cases: 150,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      badges: ["Top-Rated", "Highly-Recommended"],
      bio: "20+ years experience in medical malpractice cases, specialized in surgical errors."
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      specialization: "Forensic Analysis Expert",
      rating: 4.9,
      cases: 200,
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
      badges: ["Top-Rated"],
      bio: "Leading forensic analyst with expertise in digital evidence examination."
    }
  ];

  const chartData = {
    labels: ["Favorable", "Unfavorable", "Settled"],
    datasets: [
      {
        label: "Case Outcomes",
        data: [65, 20, 15],
        backgroundColor: ["#4CAF50", "#f44336", "#2196F3"]
      }
    ]
  };

  const ExpertCard = ({ expert }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 hover:shadow-xl transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={expert.image}
          alt={expert.name}
          className="w-24 h-24 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d";
          }}
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold">{expert.name}</h3>
          <p className="text-gray-600">{expert.specialization}</p>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`${i < Math.floor(expert.rating) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
            <span className="ml-2 text-gray-600">{expert.rating}</span>
          </div>
          <div className="flex gap-2 mt-2">
            {expert.badges.map((badge) => (
              <span
                key={badge}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => setSelectedExpert(expert)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View Profile
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
              <FaPhone className="text-gray-600" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab("experts")}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === "experts" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Expert Witness Search
              </button>
              <button
                onClick={() => setActiveTab("jury")}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === "jury" ? "border-blue-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                Jury Insights
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "experts" ? (
          <div>
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for experts by name, specialization, or case type..."
                  className="w-full px-4 py-3 pl-12 text-gray-900 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-6">
              {experts.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Jury Outcome Analysis</h2>
              <div className="h-64">
                <Bar
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false
                  }}
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Scenario Simulation</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Case Strength
                  </label>
                  <input
                    type="range"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Jury Demographics
                  </label>
                  <input
                    type="range"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {selectedExpert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold">{selectedExpert.name}</h2>
              <button
                onClick={() => setSelectedExpert(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                ×
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-600">{selectedExpert.bio}</p>
              <div className="mt-4">
                <h3 className="font-semibold">Experience</h3>
                <p>Total Cases: {selectedExpert.cases}</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  <FaEnvelope />
                  <span>Send Message</span>
                </button>
                <button className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                  <FaPhone />
                  <span>Schedule Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegalRiskTool;
