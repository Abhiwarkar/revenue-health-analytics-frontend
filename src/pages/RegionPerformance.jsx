import React from "react";
import Sidebar from "../components/Sidebar";
import RegionChart from "../components/RegionChart";
import RegionTable from "../components/RegionTable";

const RegionPerformance = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          Region Performance
        </h1>

        <RegionChart />
        <RegionTable />
      </div>
    </div>
  );
};

export default RegionPerformance;
