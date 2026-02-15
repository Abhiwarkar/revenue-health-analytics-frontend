import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import KPICards from "../components/KPICards";
import RevenueTable from "../components/RevenueTable";
import HealthTable from "../components/HealthTable";
import RevenueChart from "../components/RevenueChart";
import { fetchRevenueHealth } from "../api/api";

const Dashboard = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    fetchRevenueHealth().then(setHealthData);
  }, []);

  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">
          Revenue Analytics Dashboard
        </h1>

        <KPICards data={healthData} />
        <RevenueChart />
        <RevenueTable />
        <HealthTable />
      </div>
    </div>
  );
};

export default Dashboard;
