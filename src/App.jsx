import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RevenueAnalysis from "./pages/RevenueAnalysis";
import RiskMetrics from "./pages/RiskMetrics";
import RegionPerformance from "./pages/RegionPerformance";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/revenue-analysis" element={<RevenueAnalysis />} />
        <Route path="/risk-metrics" element={<RiskMetrics />} />
        <Route path="/region-performance" element={<RegionPerformance />} />
      </Routes>
    </Router>
  );
}

export default App;
