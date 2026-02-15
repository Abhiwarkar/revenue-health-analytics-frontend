import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `block py-2 px-3 rounded ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "hover:bg-slate-700"
    }`;

  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-8">Analytics</h2>

      <nav className="space-y-3">
        <Link to="/" className={linkClass("/")}>
          Dashboard
        </Link>

        <Link
          to="/revenue-analysis"
          className={linkClass("/revenue-analysis")}
        >
          Revenue Analysis
        </Link>

        <Link
          to="/risk-metrics"
          className={linkClass("/risk-metrics")}
        >
          Risk Metrics
        </Link>
        <Link
  to="/region-performance"
  className={linkClass("/region-performance")}
>
  Region Performance
</Link>

      </nav>
    </div>
  );
};

export default Sidebar;
