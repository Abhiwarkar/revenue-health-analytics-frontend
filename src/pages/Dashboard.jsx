import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { fetchRevenueHealth } from "../api/api";
import StatusBadge from "../components/StatusBadge";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchRevenueHealth().then(setData);
  }, []);

  const latest = data[data.length - 1];
  if (!latest) return null;

  const healthScore =
    100 -
    (latest.leakage_pct * 0.4 +
      (latest.top_customer_pct > 70 ? 20 : 0) +
      (latest.mom_growth_pct < 0 ? 20 : 0));

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Sidebar />

      <div className="flex-1 p-10 space-y-10">

        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 text-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
          <h1 className="text-4xl font-bold mb-4">
            Revenue Intelligence & Risk Monitoring Platform
          </h1>

          <p className="opacity-90 mb-6">
            Real-time performance monitoring and strategic intelligence
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-80">Latest Revenue</p>
              <h2 className="text-5xl font-bold mt-2">
                ₹ {latest.total_revenue}
              </h2>
            </div>

            <StatusBadge status={latest.status} />
          </div>
        </div>

        {/* HEALTH SCORE CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-8 flex justify-between items-center">
          <div>
            <p className="text-gray-500 text-sm">
              Overall Business Health Score
            </p>
            <h2
              className={`text-4xl font-bold mt-2 ${
                healthScore > 75
                  ? "text-green-600"
                  : healthScore > 50
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {Math.round(healthScore)} / 100
            </h2>
          </div>

          <div className="text-right">
            <p className="text-gray-500 text-sm">Growth Momentum</p>
            <h3
              className={`text-3xl font-bold ${
                latest.mom_growth_pct > 0
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {latest.mom_growth_pct}%
            </h3>
          </div>
        </div>

        {/* STRATEGIC INSIGHTS */}
        <div className="grid md:grid-cols-3 gap-8">

          <InsightCard
            title="Leakage Exposure"
            value={`${latest.leakage_pct}%`}
            positive={latest.leakage_pct < 20}
          />

          <InsightCard
            title="Customer Concentration"
            value={`${latest.top_customer_pct}%`}
            positive={latest.top_customer_pct < 70}
          />

          <InsightCard
            title="Revenue Trend"
            value={
              latest.mom_growth_pct > 0
                ? "Upward"
                : "Declining"
            }
            positive={latest.mom_growth_pct > 0}
          />
        </div>

        {/* BUSINESS SUMMARY PANEL */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-xl font-semibold mb-4">
            Executive Insight
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Revenue increased by {latest.mom_growth_pct}% this month.
            Leakage currently stands at {latest.leakage_pct}%.
            Top customer contributes {latest.top_customer_pct}% of total revenue.
            The system classifies current business condition as{" "}
            <strong>{latest.status}</strong>.
          </p>
        </div>

        {/* QUICK NAVIGATION TILES */}
        <div className="grid md:grid-cols-3 gap-6">

          <QuickTile title="Revenue Deep Dive" />
          <QuickTile title="Risk Intelligence" />
          <QuickTile title="Regional Breakdown" />

        </div>

      </div>
    </div>
  );
};

const InsightCard = ({ title, value, positive }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
    <p className="text-gray-500 text-sm">{title}</p>
    <h3
      className={`text-2xl font-bold mt-2 ${
        positive ? "text-green-600" : "text-red-500"
      }`}
    >
      {value}
    </h3>
  </div>
);

const QuickTile = ({ title }) => (
  <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition">
    <h4 className="text-lg font-semibold">{title}</h4>
  </div>
);

export default Dashboard;
