import React, { useEffect, useState } from "react";
import { fetchRegionPerformance } from "../api/api";

const RegionTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRegionPerformance().then(setData);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Region Performance Details
      </h2>

      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-2">Month</th>
            <th className="py-2">Region</th>
            <th className="py-2">Revenue</th>
            <th className="py-2">% Contribution</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-2">{row.year_month}</td>
              <td className="py-2">{row.region_name}</td>
              <td className="py-2">₹ {row.region_revenue}</td>
              <td className="py-2">{row.revenue_pct}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegionTable;
