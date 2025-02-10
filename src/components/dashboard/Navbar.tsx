import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;