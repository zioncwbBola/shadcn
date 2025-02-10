import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button lg:hidden">Open Sidebar</label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {/* Sidebar content here */}
          <li><a href="#"><FaHome /> Home</a></li>
          <li><a href="#"><FaUser /> Profile</a></li>
          <li><a href="#"><FaCog /> Settings</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;