import React, { useEffect, useState } from "react";
import { fetchRegionPerformance } from "../api/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RegionChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRegionPerformance().then(setData);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-8">
      <h2 className="text-lg font-semibold mb-4">
        Region Revenue Contribution
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="region_name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="region_revenue" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegionChart;
