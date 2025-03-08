
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from "chart.js";
import { Pie, Bar, Radar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const OutcomeProbabilityTool = () => {
  const [activeView, setActiveView] = useState("visualization");
  const [scenarios, setScenarios] = useState([]);
  const [currentScenario, setCurrentScenario] = useState({
    evidenceStrength: 50,
    legalArguments: 50,
    expertTestimony: 50,
  });

  const pieData = {
    labels: ["Favorable", "Unfavorable", "Neutral"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#22c55e", "#ef4444", "#3b82f6"],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Case Complexity",
        data: [75, 45, 25],
        backgroundColor: "#8b5cf6",
      },
    ],
  };

  const radarData = {
    labels: ["Evidence", "Arguments", "Testimony", "Precedent", "Documentation"],
    datasets: [
      {
        label: "Current Case",
        data: [65, 75, 70, 80, 60],
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        borderColor: "#6366f1",
        borderWidth: 2,
      },
    ],
  };

  const handleScenarioChange = (e) => {
    setCurrentScenario({
      ...currentScenario,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const saveScenario = () => {
    setScenarios([...scenarios, { ...currentScenario, id: Date.now() }]);
  };

  const exportData = () => {
    console.log("Exporting data...");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Outcome Probability Visualization Tool</h1>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveView("visualization")}
              className={`px-6 py-3 rounded-lg font-medium ${
                activeView === "visualization"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Outcome Probability
            </button>
            <button
              onClick={() => setActiveView("modeling")}
              className={`px-6 py-3 rounded-lg font-medium ${
                activeView === "modeling"
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              Scenario Modeling
            </button>
          </div>
        </div>

        {activeView === "visualization" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Outcome Distribution</h3>
              <Pie data={pieData} />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Case Complexity Analysis</h3>
              <Bar data={barData} />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Factor Analysis</h3>
              <Radar data={radarData} />
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Scenario Modeling</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Evidence Strength
                </label>
                <input
                  type="range"
                  name="evidenceStrength"
                  value={currentScenario.evidenceStrength}
                  onChange={handleScenarioChange}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Legal Arguments
                </label>
                <input
                  type="range"
                  name="legalArguments"
                  value={currentScenario.legalArguments}
                  onChange={handleScenarioChange}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expert Testimony
                </label>
                <input
                  type="range"
                  name="expertTestimony"
                  value={currentScenario.expertTestimony}
                  onChange={handleScenarioChange}
                  className="w-full"
                />
              </div>
              <button
                onClick={saveScenario}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Save Scenario
              </button>
            </div>

            {scenarios.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Saved Scenarios</h3>
                <div className="space-y-4">
                  {scenarios.map((scenario) => (
                    <div
                      key={scenario.id}
                      className="p-4 border border-gray-200 rounded-lg"
                    >
                      <p>Evidence Strength: {scenario.evidenceStrength}%</p>
                      <p>Legal Arguments: {scenario.legalArguments}%</p>
                      <p>Expert Testimony: {scenario.expertTestimony}%</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <button
            onClick={exportData}
            className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <FiDownload />
            Export Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutcomeProbabilityTool;