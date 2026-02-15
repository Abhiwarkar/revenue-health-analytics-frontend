import React from "react";

const KPICards = ({ data }) => {
  if (!data.length) return null;

  const latest = data[data.length - 1];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <Card title="Latest Revenue" value={`₹ ${latest.total_revenue}`} color="text-blue-600" />
      <Card title="Growth %" value={`${latest.mom_growth_pct ?? "-"}%`} color="text-green-600" />
      <Card title="Leakage %" value={`${latest.leakage_pct}%`} color="text-red-500" />
      <Card title="Status" value={latest.status} color="text-purple-600" />
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className={`text-2xl font-bold mt-2 ${color}`}>
      {value}
    </h2>
  </div>
);

export default KPICards;
