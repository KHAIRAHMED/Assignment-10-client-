import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-4" style={{ backgroundColor: "lightGray", height: "100vh" }}>
      <div className="py-2">
        <Link to="/admin">ADD</Link>
      </div>
      <div className="py-2">
        <Link to="/review">REVIEW</Link>
      </div>
    </div>
  );
};

export default Sidebar;
