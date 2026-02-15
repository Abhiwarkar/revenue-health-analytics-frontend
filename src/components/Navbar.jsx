import React from "react";

const Navbar = () => {
  return (
    <div className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          Revenue Analytics Dashboard
        </h1>
        <span className="text-sm opacity-70">Enterprise View</span>
      </div>
    </div>
  );
};

export default Navbar;
