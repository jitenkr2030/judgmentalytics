import React, { useState } from "react";
import { FaBalanceScale, FaFileContract, FaMoneyBillWave, FaUserTie, FaInfoCircle, FaChartBar } from "react-icons/fa";

const LegalRiskCalculator = () => {
  const [riskScore, setRiskScore] = useState(75);
  const [showDetails, setShowDetails] = useState(false);
  const [financialInputs, setFinancialInputs] = useState({
    potentialDamages: 500000,
    settlementOffer: 250000,
    attorneyFees: 100000,
    courtCosts: 50000
  });

  const getRiskColor = (score) => {
    if (score < 40) return "bg-green-500";
    if (score < 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const caseFactors = [
    { name: "Case Strength", value: 65 },
    { name: "Documentation", value: 80 },
    { name: "Precedent", value: 70 },
    { name: "Jurisdiction", value: 85 }
  ];

  const opposingCounsel = {
    wins: 75,
    losses: 25,
    expertise: "Commercial Litigation",
    yearsExperience: 15
  };

  const handleInputChange = (e) => {
    setFinancialInputs({
      ...financialInputs,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
          <FaBalanceScale className="mr-4" />
          Legal Risk & Financial Calculator
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Risk Score Panel */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <FaChartBar className="mr-2" /> Risk Assessment
            </h2>
            
            <div 
              className="cursor-pointer" 
              onClick={() => setShowDetails(!showDetails)}
            >
              <div className="relative h-40 w-40 mx-auto mb-6">
                <div className={`
                  ${getRiskColor(riskScore)} 
                  rounded-full h-full w-full flex items-center justify-center
                  text-4xl font-bold text-white
                  transition-all duration-300 hover:scale-105
                `}>
                  {riskScore}%
                </div>
              </div>
            </div>

            {showDetails && (
              <div className="mt-6 space-y-4">
                {caseFactors.map((factor) => (
                  <div key={factor.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{factor.name}</span>
                      <span>{factor.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-blue-600 rounded-full"
                        style={{ width: `${factor.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Financial Exposure Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <FaMoneyBillWave className="mr-2" /> Financial Exposure
            </h2>

            <div className="space-y-6">
              {Object.entries(financialInputs).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    <FaInfoCircle className="ml-2 text-gray-400 cursor-help" />
                  </label>
                  <input
                    type="range"
                    name={key}
                    min="0"
                    max="1000000"
                    value={value}
                    onChange={handleInputChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-right font-mono">
                    ${value.toLocaleString()}
                  </div>
                </div>
              ))}

              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-4">Total Exposure</h3>
                <div className="text-2xl font-bold text-red-600">
                  ${(Object.values(financialInputs).reduce((a, b) => a + b, 0)).toLocaleString()}
                </div>
              </div>
            </div>
          </div>

          {/* Opposing Counsel Panel */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <FaUserTie className="mr-2" /> Opposing Counsel Analysis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Win Rate</span>
                  <span className="text-green-600 font-semibold">{opposingCounsel.wins}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${opposingCounsel.wins}%` }}
                  />
                </div>

                <div className="mt-4">
                  <p className="font-medium">Expertise</p>
                  <p className="text-gray-600">{opposingCounsel.expertise}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Experience</span>
                  <span className="text-blue-600 font-semibold">{opposingCounsel.yearsExperience} years</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Case History</h4>
                  <div className="flex justify-between text-sm">
                    <span>Wins: {opposingCounsel.wins}</span>
                    <span>Losses: {opposingCounsel.losses}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalRiskCalculator;