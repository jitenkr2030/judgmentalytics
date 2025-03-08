import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import global styles
import LoginSignup from './LoginSignup';
import AutomatedResponseGenerator from './components/AutomatedResponseGenerator';
import LandingPage from './landingpage';
import CollaborativeWorkspace from './components/CollaborativeWorkspace';
import DocumentComparisonModule from './components/DocumentComparisonModule';
import LegalRiskDashboard from './components/LegalRiskDashboard';
import CasePredictionTool from './components/CasePredictionTool';
import ComplianceDetectionTool from './components/ComplianceDetectionTool';
import LegalDocumentTool from './components/LegalDocumentTool';
import LegalRiskTool from './components/LegalRiskTool';
import ClientCommunicationTool from './components/ClientCommunicationTool';
import DocumentAutomation from './components/DocumentAutomation';
import LegalResearchAssistant from './components/LegalResearchAssistant';
import OutcomeProbabilityTool from './components/OutcomeProbabilityTool';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <ul className="nav-links">
          {/* General */}
          <li><Link to="/" className="nav-link">Landing Page</Link></li>
          <li><Link to="/login-signup" className="nav-link">Login / Signup</Link></li>
          
          {/* Tools & Features */}
          <li><Link to="/automated-response" className="nav-link">Automated Response</Link></li>
          <li><Link to="/collaborative-workspace" className="nav-link">Collaborative Workspace</Link></li>
          <li><Link to="/document-automation" className="nav-link">Document Automation</Link></li>
          <li><Link to="/legal-research" className="nav-link">Legal Research Assistant</Link></li>
          <li><Link to="/client-communication" className="nav-link">Client Communication</Link></li>
          
          {/* Analysis & Insights */}
          <li><Link to="/case-prediction" className="nav-link">Case Prediction</Link></li>
          <li><Link to="/outcome-probability" className="nav-link">Outcome Probability</Link></li>
          <li><Link to="/legal-risk-dashboard" className="nav-link">Legal Risk Dashboard</Link></li>
          <li><Link to="/compliance-detection" className="nav-link">Compliance Detection</Link></li>
          
          {/* Document Handling */}
          <li><Link to="/legal-document" className="nav-link">Legal Document Tool</Link></li>
          <li><Link to="/document-comparison" className="nav-link">Document Comparison</Link></li>
          <li><Link to="/legal-risk-tool" className="nav-link">Legal Risk Tool</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* General */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        
        {/* Tools & Features */}
        <Route path="/automated-response" element={<AutomatedResponseGenerator />} />
        <Route path="/collaborative-workspace" element={<CollaborativeWorkspace />} />
        <Route path="/document-automation" element={<DocumentAutomation />} />
        <Route path="/legal-research" element={<LegalResearchAssistant />} />
        <Route path="/client-communication" element={<ClientCommunicationTool />} />
        
        {/* Analysis & Insights */}
        <Route path="/case-prediction" element={<CasePredictionTool />} />
        <Route path="/outcome-probability" element={<OutcomeProbabilityTool />} />
        <Route path="/legal-risk-dashboard" element={<LegalRiskDashboard />} />
        <Route path="/compliance-detection" element={<ComplianceDetectionTool />} />
        
        {/* Document Handling */}
        <Route path="/legal-document" element={<LegalDocumentTool />} />
        <Route path="/document-comparison" element={<DocumentComparisonModule />} />
        <Route path="/legal-risk-tool" element={<LegalRiskTool />} />
      </Routes>
    </div>
  );
};

export default App;














