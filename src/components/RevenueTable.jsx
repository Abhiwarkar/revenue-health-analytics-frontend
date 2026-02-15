import React, { useEffect, useState } from "react";
import { fetchMonthlyRevenue } from "../api/api";

const RevenueTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMonthlyRevenue().then(setData);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow mb-8">
      <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b text-gray-600">
            <th className="py-2">Month</th>
            <th className="py-2">Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.year_month} className="border-b hover:bg-gray-50">
              <td className="py-2">{row.year_month}</td>
              <td className="py-2 font-semibold">
                ₹ {row.total_revenue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RevenueTable;
