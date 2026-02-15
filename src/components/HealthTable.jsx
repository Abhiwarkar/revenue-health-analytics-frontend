import React, { useEffect, useState } from "react";
import { fetchRevenueHealth } from "../api/api";

const HealthTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRevenueHealth().then(setData);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Revenue Health Status</h2>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-2">Month</th>
            <th className="py-2">Revenue</th>
            <th className="py-2">Growth %</th>
            <th className="py-2">Leakage %</th>
            <th className="py-2">Top Customer %</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.year_month} className="border-b hover:bg-gray-50">
              <td className="py-2">{row.year_month}</td>
              <td className="py-2">₹ {row.total_revenue}</td>
              <td className="py-2">{row.mom_growth_pct ?? "-"}</td>
              <td className="py-2">{row.leakage_pct}</td>
              <td className="py-2">{row.top_customer_pct}</td>
              <td
                className={`py-2 font-bold ${
                  row.status === "AT RISK"
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthTable;
