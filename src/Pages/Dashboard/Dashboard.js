import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="mx-10  btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80  text-base-content bg-slate-200 ">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard/eventTypes">Event Types</Link>
          </li>
          <li>
            <Link to="/dashboard/scheduledEvents">Scheduled Events</Link>
          </li>
          <li>
            <Link to="/dashboard/workFlow">Workflows</Link>
          </li>
          <li>
            <Link to="/dashboard/routingForms">RoutingForms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
