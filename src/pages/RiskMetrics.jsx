import React from "react";
import Sidebar from "../components/Sidebar";
import HealthTable from "../components/HealthTable";

const RiskMetrics = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          Risk Metrics
        </h1>

        <HealthTable />
      </div>
    </div>
  );
};

export default RiskMetrics;
