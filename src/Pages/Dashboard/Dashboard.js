import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import useProfessional from "../../hooks/useProfessional";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [professional] = useProfessional(user);

  const adminMenu =
    <>
      <li>
        <Link to="/dashboard">Admin</Link>
        <Link to="/dashboard/profile">Admin Profile</Link>
      </li>
      <li>
        <Link to="/dashboard/manageUser">Manage User</Link>
      </li>
      <li>
        <Link to="/dashboard/manageEvent">Manage Event</Link>
      </li>
      <li>
        <Link to="/dashboard/scheduledEvents">Scheduled Events</Link>
      </li>
      <li>
        <Link to="/dashboard/packages">Packages</Link>
      </li>
      <li>
        <Link to="/dashboard/professionalCollections">Professional Collections</Link>
      </li>
    </>

  const professionalMenu =
    <>
      <li>
        <Link to="/dashboard/profile">Profile</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/dashboard/eventTypes">Event Types</Link>
      </li>
    </>
  const userMenu =
    <>
      <li>
        <Link to="/dashboard/profile">Profile</Link>
      </li>
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
    </>

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <Outlet></Outlet>
        <label
          for="my-drawer-2"
          className="mx-10  btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-slate-50">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80  text-base-content bg-transparent ">
          {
            admin ? adminMenu : (professional ? professionalMenu : userMenu)
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
