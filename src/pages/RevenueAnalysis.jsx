import React from "react";
import Sidebar from "../components/Sidebar";
import RevenueTable from "../components/RevenueTable";
import RevenueChart from "../components/RevenueChart";

const RevenueAnalysis = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          Revenue Analysis
        </h1>

        <RevenueChart />
        <RevenueTable />
      </div>
    </div>
  );
};

export default RevenueAnalysis;
