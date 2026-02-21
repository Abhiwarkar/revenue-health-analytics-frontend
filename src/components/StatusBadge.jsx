import React from "react";

const StatusBadge = ({ status }) => {
  const isRisk = status === "AT RISK";

  return (
    <div className="relative inline-flex items-center">

      {/* Pulse Ring */}
      {isRisk && (
        <span className="absolute inline-flex h-10 w-10 rounded-full bg-red-400 opacity-20 animate-ping"></span>
      )}

      {/* Main Badge */}
      <span
        className={`
          relative flex items-center gap-2
          px-6 py-2 rounded-full text-sm font-semibold
          backdrop-blur-md border shadow-lg
          transition-all duration-300
          ${
            isRisk
              ? "bg-gradient-to-r from-red-500 to-pink-500 text-white border-red-400 shadow-red-300"
              : "bg-gradient-to-r from-green-400 to-emerald-500 text-white border-green-400 shadow-green-300"
          }
        `}
      >
        {isRisk ? "⚠" : "✔"}
        {status}
      </span>
    </div>
  );
};

export default StatusBadge;
