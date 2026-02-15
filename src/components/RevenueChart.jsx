import React, { useEffect, useState } from "react";
import { fetchMonthlyRevenue } from "../api/api";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMonthlyRevenue().then(setData);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-8">
      <h2 className="text-lg font-semibold mb-4">
        Revenue Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="year_month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total_revenue"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
